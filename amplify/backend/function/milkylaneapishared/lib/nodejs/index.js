"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.graphql = void 0;
const graphql_1 = require("@milkylane/graphql");
const aws_sdk_1 = require("aws-sdk");
const https_1 = require("https");
const { API_MILKYLANE_GRAPHQLAPIENDPOINTOUTPUT = graphql_1.config.aws_appsync_graphqlEndpoint, REGION = graphql_1.config.aws_appsync_region, } = process.env;
const APIEndpoint = new aws_sdk_1.Endpoint(API_MILKYLANE_GRAPHQLAPIENDPOINTOUTPUT);
const APIHost = APIEndpoint.host;
const sendRequest = (options) => new Promise((resolve, reject) => {
    const req = https_1.request({ ...options, host: APIHost }, res => {
        let data = '';
        res.on('error', reject);
        res.on('data', chunk => (data += chunk));
        res.on('end', () => resolve(JSON.parse(data)));
    });
    req.write(options.body);
    req.end();
});
const graphql = (options, headers) => {
    const { query, variables } = options;
    const req = new aws_sdk_1.HttpRequest(APIEndpoint, REGION);
    req.method = 'POST';
    req.path = '/graphql';
    req.headers['host'] = APIHost;
    req.headers['Content-Type'] = 'application/json';
    if (headers)
        req.headers = { ...req.headers, ...headers };
    req.body = JSON.stringify({ query, variables });
    const signer = new aws_sdk_1.Signers.V4(req, 'appsync', true);
    signer.addAuthorization(aws_sdk_1.config.credentials, aws_sdk_1.util.date.getDate());
    return sendRequest(req);
};
exports.graphql = graphql;
const pick = (obj, keys) => keys.reduce((a, c) => ((a[c] = obj[c]), a), Object.create({}));
exports.pick = pick;
