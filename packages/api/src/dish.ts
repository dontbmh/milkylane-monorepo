import {
  CreateDishMenuMutation,
  CreateDishMutation,
  GetDishQuery,
} from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { DishInput, makeInterface, pickInput } from './transformer/make-dish';
import query from './query';

export const createDish = async (input: DishInput, menuId: string) => {
  const res = await query<CreateDishMutation>({
    query: mutations.createDish,
    variables: { input: pickInput(input) },
    auth: 'user-pool',
  });

  await query<CreateDishMenuMutation>({
    query: mutations.createDishMenu,
    variables: { input: { dishId: res.createDish.id, menuId } },
    auth: 'user-pool',
  });

  return res.createDish && makeInterface(res.createDish);
};

export const getDish = async (id: string) => {
  const res = await query<GetDishQuery>({
    query: queries.getDish,
    variables: { id },
  });

  return res.getDish && makeInterface(res.getDish);
};
