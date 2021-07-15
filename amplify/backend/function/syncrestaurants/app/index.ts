import { graphql } from '@milkylane/api-shared';
import { mutations, CreateRestaurantMutation } from '@milkylane/graphql';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = async event => {
  const res = await graphql<CreateRestaurantMutation>({
    query: mutations.createRestaurant,
    variables: {
      input: {
        imageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/large/acai-colares.jpeg',
        mediumImageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/medium/acai-colares.jpeg',
        thumbnailImageURI:
          'https://s3-sa-east-1.amazonaws.com/bon-appetit-resources/restaurants/thumbnail/acai-colares.jpeg',
        name: 'Açaí do Colares123',
        stars: 5,
        location: [-38.5902263, -3.7271887],
        operatingHours: [
          { open: '17:00', close: '00:00', day: 'monday' },
          { open: '17:00', close: '00:00', day: 'tuesday' },
          { open: '17:00', close: '00:00', day: 'friday' },
        ],
        description:
          'The best option for those that are looking for something healthy to put on their mouths.',
        address: 'Independência av, 985 - Quintino Cunha, Fortaleza',
      },
    },
  });
  return {
    statusCode: 200,
    body: JSON.stringify(res.data.createRestaurant),
  };
};
