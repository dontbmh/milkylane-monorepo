import { IDish } from './Dish';

export interface IMenu {
  id?: string;
  type: string;
  dishes: IDish[];
}
