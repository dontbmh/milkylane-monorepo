import { IDish } from './Dish';
import { IEvent } from './Event';
import { ILocation } from './Location';

export interface ITrend {
  inYourCityEvents: IEvent[];
  popularDishes: IDish[];
  youMightLikeDishes: IDish[];
  userLocation: ILocation;
}
