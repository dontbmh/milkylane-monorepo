import { IMenu } from '@milkylane/model';
import { CreateMenuMutation, GetMenuQuery, Menu } from './graphql/types';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { createDish, makeDish } from './dish';
import pick from './pick';
import query from './query';

const SharedProps = ['id', 'type', 'dishes'] as const;

export const makeMenu = (data: Menu) => {
  const { dishes, ...rest } = pick(data, [...SharedProps]);
  const items = dishes?.items?.reduce(
    (a, c) => (c.dish && a.push(makeDish(c.dish)), a),
    [],
  );
  return { ...rest, dishes: items } as IMenu;
};

export const createMenu = async (data: IMenu, restaurantId: string) => {
  const res = await query<CreateMenuMutation>({
    query: mutations.createMenu,
    variables: { input: { type: data.type, restaurantId } },
    auth: 'user-pool',
  });

  const menuId = (data.id = res.createMenu.id);
  await Promise.all(data.dishes.map(e => createDish(e, menuId)));

  return data;
};

export const getMenu = async (id: string) => {
  const res = await query<GetMenuQuery>({
    query: queries.getMenu,
    variables: { id },
  });

  return res.getMenu && makeMenu(res.getMenu);
};
