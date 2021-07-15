import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import * as AWSSDK from 'aws-sdk';
import * as https from 'https';
import { URL } from 'url';

const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      stars
      address
      location
      imageURI
      mediumImageURI
      thumbnailImageURI
      operatingHours
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          restaurantId
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;

const endpoint = new URL(
  process.env.API_MILKYLANE_GRAPHQLAPIENDPOINTOUTPUT,
).hostname.toString();
const region = process.env.REGION;

const AWS = AWSSDK as any;

export const handler = async event => {
  const req = new AWS.HttpRequest(endpoint, region);
  req.method = 'POST';
  req.path = '/graphql';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query: createRestaurant,
    operationName: 'createTodo',
    variables: {
      input: {
        imageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/large/acai-colares.jpeg',
        mediumImageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/medium/acai-colares.jpeg',
        thumbnailImageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/thumbnail/acai-colares.jpeg',
        name: 'Açaí do Colares',
        stars: 5,
        location: [-38.5902263, -3.7271887],
        operatingHours: [],
        description:
          'The best option for those that are looking for something healthy to put on their mouths.',
        address: 'Independência av, 985 - Quintino Cunha, Fortaleza',
      },
    },
  });

  const signer = new AWS.Signers.V4(req, 'appsync', true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, result => {
      let data = '';

      result.on('data', chunk => {
        data += chunk;
      });

      result.on('end', () => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  return {
    statusCode: 200,
    body: data,
  };
};

// export const handler: APIGatewayProxyHandlerV2 = async (event, ctx) => {
//   let body = '';

//   console.log(process.env.API_MILKYLANE_GRAPHQLAPIKEYOUTPUT);

//   const res = await axios({
//     url: process.env.API_URL,
//     method: 'post',
//     headers: {
//       'x-api-key': process.env.API_MILKYLANE_GRAPHQLAPIKEYOUTPUT,
//     },
//     data: {
//       query: createRestaurant,
//       variables: {
//         input: {
//           imageURI:
//             'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/large/acai-colares.jpeg',
//           mediumImageURI:
//             'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/medium/acai-colares.jpeg',
//           thumbnailImageURI:
//             'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/thumbnail/acai-colares.jpeg',
//           name: 'Açaí do Colares',
//           stars: 5,
//           location: [-38.5902263, -3.7271887],
//           operatingHours: [
//             { open: '17:00', close: '00:00', day: 'monday' },
//             { open: '17:00', close: '00:00', day: 'tuesday' },
//             { open: '17:00', close: '00:00', day: 'friday' },
//           ],
//           description:
//             'The best option for those that are looking for something healthy to put on their mouths.',
//           address: 'Independência av, 985 - Quintino Cunha, Fortaleza',
//         },
//       },
//     },
//   });

//   try {
//     body = JSON.stringify(res);
//   } catch (error) {
//     body = error.message;
//   }
//   // TODO implement
//   const response = {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//     body,
//   };
//   return response;
// };
