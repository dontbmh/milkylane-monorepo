import { ILocation } from '@milkylane/model';
import {
  CreateRestaurantMutation,
  GetRestaurantQuery,
  ListRestaurantsQuery,
  NearbyRestaurantsQuery,
} from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import {
  pickInput,
  makeInterface,
  RestaurantInput,
} from './transformer/make-restaurant';
import query from './query';

export const createRestaurant = async (input: RestaurantInput) => {
  const { location, operatingHours, ...rest } = pickInput(input);
  const res = await query<CreateRestaurantMutation>({
    query: mutations.createRestaurant,
    variables: {
      input: {
        ...rest,
        location: [location.longitude, location.latitude],
        operatingHours: operatingHours.map(e => JSON.stringify(e)),
      },
    },
    auth: 'user-pool',
  });

  return res.createRestaurant && makeInterface(res.createRestaurant);
};

export const getRestaurant = async (id: string) => {
  const res = await query<GetRestaurantQuery>({
    query: queries.getRestaurant,
    variables: { id },
  });

  return res.getRestaurant && makeInterface(res.getRestaurant);
};

export const listRestaurant = async () => {
  const res = await query<ListRestaurantsQuery>({
    query: queries.listRestaurants,
  });

  return res.listRestaurants.items?.map(makeInterface);
};

export const getNearbyRestaurants = async (
  center: ILocation,
  km: number,
  limit: number = 10,
) => {
  const res = await query<NearbyRestaurantsQuery>({
    query: queries.nearbyRestaurants,
    variables: {
      location: [center.longitude, center.latitude],
      distance: `${km}km`,
      limit,
    },
  });

  return res.nearbyRestaurants.items?.map(makeInterface);
};
