import { API } from 'aws-amplify';
import {
  GraphQLOptions,
  GraphQLResult,
  GRAPHQL_AUTH_MODE,
} from '@aws-amplify/api-graphql';

type Headers = { [key: string]: string };
type Options = Pick<GraphQLOptions, 'query' | 'variables'> & {
  auth?: 'api-key' | 'user-pool';
};

const query = async <T extends any>(options: Options, headers?: Headers) => {
  const { auth, ...rest } = options;
  const result = (await API.graphql(
    {
      authMode:
        auth === 'user-pool'
          ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
          : GRAPHQL_AUTH_MODE.API_KEY,
      ...rest,
    },
    headers,
  )) as GraphQLResult<T>;
  return result.data;
};

export default query;
