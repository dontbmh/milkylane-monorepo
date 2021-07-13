import { ILocation, IRestaurant } from '@milkylane/model';
import moment from 'moment';
import {
  CreateRestaurantMutation,
  GetRestaurantQuery,
  ListRestaurantsQuery,
  NearbyRestaurantsQuery,
  Restaurant,
} from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { makeMenu } from './menu';
import pick from './pick';
import query from './query';

const SharedProps = [
  'name',
  'description',
  'stars',
  'address',
  'location',
  'imageURI',
  'mediumImageURI',
  'thumbnailImageURI',
  'operatingHours',
] as const;

const makeRestaurant = (data: Restaurant) => {
  const { location, operatingHours, menus, ...rest } = pick(data, [
    ...(['id', 'menus'] as const),
    ...SharedProps,
  ]);

  const obj = {
    ...rest,
    location: { longitude: location[0], latitude: location[1] },
    operatingHours: operatingHours.map(s => JSON.parse(s)),
    menus: menus?.items?.map(makeMenu),
  };

  const ret = new Proxy(obj, {
    get(target, name, receiver) {
      if (name === 'operatingHoursToday') {
        const day = moment().format('dddd').toLowerCase();
        return target.operatingHours.find(e => e.day === day);
      }

      if (name === 'open') {
        const hours = receiver.todayOperatingHours;
        const open =
          !!hours &&
          moment().isBetween(
            moment(hours.open, 'HH:mm'),
            moment(hours.close === '00:00' ? '24:00' : hours.close, 'HH:mm'),
          );
        return open;
      }

      return Reflect.get(target, name, receiver);
    },
  });

  return ret;
};

export const createRestaurant = async (data: IRestaurant) => {
  const { location, operatingHours, ...rest } = pick(data, [...SharedProps]);

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

  data.id = res.createRestaurant.id;

  return data;
};

export const getRestaurant = async (id: string) => {
  const res = await query<GetRestaurantQuery>({
    query: queries.getRestaurant,
    variables: { id },
  });

  return res.getRestaurant && makeRestaurant(res.getRestaurant);
};

export const listRestaurant = async () => {
  const res = await query<ListRestaurantsQuery>({
    query: queries.listRestaurants,
  });

  return res.listRestaurants.items.map(makeRestaurant);
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

  return res.nearbyRestaurants.items.map(makeRestaurant);
};
