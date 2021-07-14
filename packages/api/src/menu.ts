import { CreateMenuMutation, GetMenuQuery } from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { makeInterface, MenuInput } from './transformer/make-menu';
import query from './query';

export const createMenu = async (input: MenuInput, restaurantId: string) => {
  const res = await query<CreateMenuMutation>({
    query: mutations.createMenu,
    variables: { input: { type: input.type, restaurantId } },
    auth: 'user-pool',
  });

  return res.createMenu && makeInterface(res.createMenu);
};

export const getMenu = async (id: string) => {
  const res = await query<GetMenuQuery>({
    query: queries.getMenu,
    variables: { id },
  });

  return res.getMenu && makeInterface(res.getMenu);
};
