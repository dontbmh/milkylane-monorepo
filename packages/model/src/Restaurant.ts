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
  imageURI: string;
  mediumImageURI: string;
  thumbnailImageURI: string;
  operatingHours?: IOperatingHours[];
  events?: IEvent[];
  menus?: IMenu[];
  reviews?: IReview[];
  readonly open: boolean;
  readonly operatingHoursToday: IOperatingHours;
}
