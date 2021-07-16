import { Dish } from '@milkylane/graphql';
import { IDish } from '@milkylane/model';
import pick from '../utils/pick';

export const SharedProps = [
  'name',
  'stars',
  'price',
  'description',
  'ingredients',
  'imageURI',
  'mediumImageURI',
  'thumbnailImageURI',
] as const;

export type DishInput = Pick<IDish, typeof SharedProps[number]>;

export const pickInput = (data: DishInput) => pick(data, [...SharedProps]);

export const makeInterface = (data: Dish) =>
  pick(data, ['id', ...SharedProps]) as IDish;
