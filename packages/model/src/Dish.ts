import { IReview } from './Review';

export interface IDish {
  id: string;
  name: string;
  stars: number;
  price: number;
  description: string;
  ingredients: string[];
  imageURI: string;
  mediumImageURI: string;
  thumbnailImageURI: string;
  reviews?: IReview[];
}
