import { IMenu } from '@milkylane/model';
import { Menu } from '../graphql/types';
import pick from '../utils/pick';
import { makeInterface as makeDish } from './make-dish';

const SharedProps = ['type'] as const;

export type MenuInput = Pick<IMenu, typeof SharedProps[number]>;

export const makeInput = (data: MenuInput) => pick(data, [...SharedProps]);

export const makeInterface = (data: Menu) => {
  const { dishes, ...rest } = pick(data, ['id', ...SharedProps]);
  const items = dishes?.items?.reduce(
    (a, c) => (c.dish && a.push(makeDish(c.dish)), a),
    [],
  );
  return { ...rest, dishes: items } as IMenu;
};
