import { IEvent } from './Event';
import { ILocation } from './Location';
import { IMenu } from './Menu';
import { IReview } from './Review';

export interface IOperatingHours {
  day: string;
  open: string;
  close: string;
}

export interface IRestaurant {
  id?: string;
  name: string;
  description: string;
  stars: number;
  address: string;
  location: ILocation;
  operatingHours: IOperatingHours[];
  imageURI: string;
  mediumImageURI: string;
  thumbnailImageURI: string;
  events?: IEvent[];
  menus?: IMenu[];
  reviews?: IReview[];
  readonly open: boolean;
  readonly operatingHoursToday: IOperatingHours;
}
