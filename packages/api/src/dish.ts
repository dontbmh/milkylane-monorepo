import { IDish } from '@milkylane/model';
import {
  CreateDishMenuMutation,
  CreateDishMutation,
  Dish,
  GetDishQuery,
} from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import pick from './pick';
import query from './query';

const SharedProps = [
  'name',
  'stars',
  'price',
  'description',
  'ingredients',
  'imageURI',
  'mediumImageURI',
  'thumbnailImageURI',
] as const;

export const makeDish = (data: Dish) =>
  pick(data, ['id', ...SharedProps]) as IDish;

export const createDish = async (data: IDish, menuId: string) => {
  const res = await query<CreateDishMutation>({
    query: mutations.createDish,
    variables: { input: pick(data, [...SharedProps]) },
    auth: 'user-pool',
  });

  const dishId = (data.id = res.createDish.id);
  await query<CreateDishMenuMutation>({
    query: mutations.createDishMenu,
    variables: { input: { dishId, menuId } },
    auth: 'user-pool',
  });

  return data;
};

export const getDish = async (id: string) => {
  const res = await query<GetDishQuery>({
    query: queries.getDish,
    variables: { id },
  });
  
  return res.getDish && makeDish(res.getDish);
};
