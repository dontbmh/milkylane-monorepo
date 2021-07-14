import { IRestaurant } from 'model/src/Restaurant';
import moment from 'moment';
import { Restaurant } from '../graphql/types';
import pick from '../utils/pick';
import { makeInterface as makeMenu } from './make-menu';

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

export type RestaurantInput = Pick<IRestaurant, typeof SharedProps[number]>;

export const pickInput = (data: RestaurantInput) =>
  pick(data, [...SharedProps]);

export const makeInterface = (data: Restaurant) => {
  const { location, operatingHours, menus, ...rest } = pick(data, [
    ...(['id', 'menus'] as const),
    ...SharedProps,
  ]);

  const obj = {
    ...rest,
    location: { longitude: location[0], latitude: location[1] },
    operatingHours: operatingHours.map(s => JSON.parse(s)),
    menus: menus?.items?.map(makeMenu),
  } as IRestaurant;

  const proxy = new Proxy(obj, {
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

  return proxy;
};
