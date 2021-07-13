import { IRestaurant } from './Restaurant';

export interface IEvent {
  id: string;
  title: string;
  description: string;
  imageURI: string;
  smallImageURI: string;
  mediumImageURI: string;
  dishesTypes: string[];
  restaurantsParticipating: number;
}

export interface IEventDetails {
  title: string;
  description: string;
  imageURL: string;
  thumbnailImageURL: string;
  event: IEvent;
  restaurants: IRestaurant[];
}
