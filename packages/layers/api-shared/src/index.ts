import { config as graphqlConfig } from '@milkylane/graphql';
import { config, Endpoint, HttpRequest, Signers, util } from 'aws-sdk';
import { request } from 'https';

const {
  API_MILKYLANE_GRAPHQLAPIENDPOINTOUTPUT = graphqlConfig.aws_appsync_graphqlEndpoint,
  REGION = graphqlConfig.aws_appsync_region,
} = process.env;

const APIEndpoint = new Endpoint(API_MILKYLANE_GRAPHQLAPIENDPOINTOUTPUT);
const APIHost = APIEndpoint.host;

type Headers = { [key: string]: string };
type Options = { query: string; variables?: object };
type Response<T> = { data?: T; errors?: Error[] };

const sendRequest = (options: HttpRequest) =>
  new Promise((resolve, reject) => {
    const req = request({ ...options, host: APIHost }, res => {
      let data = '';
      res.on('error', reject);
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.write(options.body);
    req.end();
  });

export const graphql = <T extends any>(options: Options, headers?: Headers) => {
  const { query, variables } = options;
  const req = new HttpRequest(APIEndpoint, REGION);
  req.method = 'POST';
  req.path = '/graphql';
  req.headers['host'] = APIHost;
  req.headers['Content-Type'] = 'application/json';
  if (headers) req.headers = { ...req.headers, ...headers };
  req.body = JSON.stringify({ query, variables });
  const signer = new Signers.V4(req, 'appsync', true);
  signer.addAuthorization(config.credentials, util.date.getDate());
  return sendRequest(req) as Response<T>;
};

export const pick = <T extends any, U extends keyof T>(
  obj: T,
  keys: U[],
): Pick<T, U> => keys.reduce((a, c) => ((a[c] = obj[c]), a), Object.create({}));
