/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  avatarURI: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  avatarURI?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  avatarURI: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  avatarURI?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  dishId: string,
  restaurantId: string,
  title: string,
  stars: number,
  content: string,
  reviewerId: string,
};

export type ModelReviewConditionInput = {
  dishId?: ModelIDInput | null,
  restaurantId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  content?: ModelStringInput | null,
  reviewerId?: ModelIDInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  dishId: string,
  restaurantId: string,
  title: string,
  stars: number,
  content: string,
  reviewerId: string,
  reviewer?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateReviewInput = {
  id: string,
  dishId?: string | null,
  restaurantId?: string | null,
  title?: string | null,
  stars?: number | null,
  content?: string | null,
  reviewerId?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateDishInput = {
  id?: string | null,
  name: string,
  description: string,
  stars: number,
  price: number,
  ingredients?: Array< string | null > | null,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  ingredients?: ModelStringInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  and?: Array< ModelDishConditionInput | null > | null,
  or?: Array< ModelDishConditionInput | null > | null,
  not?: ModelDishConditionInput | null,
};

export type Dish = {
  __typename: "Dish",
  id: string,
  name: string,
  description: string,
  stars: number,
  price: number,
  ingredients?: Array< string | null > | null,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
  createdAt: string,
  updatedAt: string,
  reviews?: ModelReviewConnection | null,
  menus?: ModelDishMenuConnection | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items?:  Array<Review | null > | null,
  nextToken?: string | null,
};

export type ModelDishMenuConnection = {
  __typename: "ModelDishMenuConnection",
  items?:  Array<DishMenu | null > | null,
  nextToken?: string | null,
};

export type DishMenu = {
  __typename: "DishMenu",
  id: string,
  dishId: string,
  menuId: string,
  createdAt: string,
  updatedAt: string,
  dish?: Dish | null,
  menu?: Menu | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  restaurantId: string,
  type: string,
  createdAt: string,
  updatedAt: string,
  dishes?: ModelDishMenuConnection | null,
};

export type UpdateDishInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  stars?: number | null,
  price?: number | null,
  ingredients?: Array< string | null > | null,
  imageURI?: string | null,
  mediumImageURI?: string | null,
  thumbnailImageURI?: string | null,
};

export type DeleteDishInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  restaurantId: string,
  type: string,
};

export type ModelMenuConditionInput = {
  restaurantId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type UpdateMenuInput = {
  id: string,
  restaurantId?: string | null,
  type?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateDishMenuInput = {
  id?: string | null,
  dishId: string,
  menuId: string,
};

export type ModelDishMenuConditionInput = {
  dishId?: ModelIDInput | null,
  menuId?: ModelIDInput | null,
  and?: Array< ModelDishMenuConditionInput | null > | null,
  or?: Array< ModelDishMenuConditionInput | null > | null,
  not?: ModelDishMenuConditionInput | null,
};

export type UpdateDishMenuInput = {
  id: string,
  dishId?: string | null,
  menuId?: string | null,
};

export type DeleteDishMenuInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  description: string,
  dishTypes?: Array< string | null > | null,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dishTypes?: ModelStringInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  description: string,
  dishTypes?: Array< string | null > | null,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
  createdAt: string,
  updatedAt: string,
  restaurants?: ModelEventRestaurantConnection | null,
};

export type ModelEventRestaurantConnection = {
  __typename: "ModelEventRestaurantConnection",
  items?:  Array<EventRestaurant | null > | null,
  nextToken?: string | null,
};

export type EventRestaurant = {
  __typename: "EventRestaurant",
  id: string,
  eventId: string,
  restaurantId: string,
  createdAt: string,
  updatedAt: string,
  event?: Dish | null,
  restaurant?: Restaurant | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  name: string,
  description: string,
  stars: number,
  address: string,
  location: Array< number | null >,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
  operatingHours: Array< string | null >,
  createdAt: string,
  updatedAt: string,
  reviews?: ModelReviewConnection | null,
  menus?: ModelMenuConnection | null,
  events?: ModelEventRestaurantConnection | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items?:  Array<Menu | null > | null,
  nextToken?: string | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  dishTypes?: Array< string | null > | null,
  imageURI?: string | null,
  mediumImageURI?: string | null,
  thumbnailImageURI?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  description: string,
  stars: number,
  address: string,
  location: Array< number | null >,
  imageURI: string,
  mediumImageURI: string,
  thumbnailImageURI: string,
  operatingHours: Array< string | null >,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  location?: ModelFloatInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  operatingHours?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  stars?: number | null,
  address?: string | null,
  location?: Array< number | null > | null,
  imageURI?: string | null,
  mediumImageURI?: string | null,
  thumbnailImageURI?: string | null,
  operatingHours?: Array< string | null > | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type CreateEventRestaurantInput = {
  id?: string | null,
  eventId: string,
  restaurantId: string,
};

export type ModelEventRestaurantConditionInput = {
  eventId?: ModelIDInput | null,
  restaurantId?: ModelIDInput | null,
  and?: Array< ModelEventRestaurantConditionInput | null > | null,
  or?: Array< ModelEventRestaurantConditionInput | null > | null,
  not?: ModelEventRestaurantConditionInput | null,
};

export type UpdateEventRestaurantInput = {
  id: string,
  eventId?: string | null,
  restaurantId?: string | null,
};

export type DeleteEventRestaurantInput = {
  id: string,
};

export type CreateOrderItemInput = {
  id?: string | null,
  orderId: string,
  dishId: string,
  quantity: number,
};

export type ModelOrderItemConditionInput = {
  orderId?: ModelIDInput | null,
  dishId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelOrderItemConditionInput | null > | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  not?: ModelOrderItemConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  id: string,
  orderId: string,
  dishId: string,
  quantity: number,
  createdAt: string,
  updatedAt: string,
  dish?: Dish | null,
  owner?: string | null,
};

export type UpdateOrderItemInput = {
  id: string,
  orderId?: string | null,
  dishId?: string | null,
  quantity?: number | null,
};

export type DeleteOrderItemInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  restaurantId: string,
};

export type ModelOrderConditionInput = {
  restaurantId?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  restaurantId: string,
  items?: ModelOrderItemConnection | null,
  createdAt: string,
  updatedAt: string,
  restaurant?: Restaurant | null,
  owner?: string | null,
};

export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items?:  Array<OrderItem | null > | null,
  nextToken?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  restaurantId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type RestaurantConnection = {
  __typename: "RestaurantConnection",
  items?:  Array<Restaurant | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  avatarURI?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  dishId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelOrderItemFilterInput | null > | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  not?: ModelOrderItemFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  restaurantId?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  dishId?: ModelIDInput | null,
  restaurantId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  content?: ModelStringInput | null,
  reviewerId?: ModelIDInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  ingredients?: ModelStringInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  and?: Array< ModelDishFilterInput | null > | null,
  or?: Array< ModelDishFilterInput | null > | null,
  not?: ModelDishFilterInput | null,
};

export type ModelDishConnection = {
  __typename: "ModelDishConnection",
  items?:  Array<Dish | null > | null,
  nextToken?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  restaurantId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dishTypes?: ModelStringInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  stars?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  location?: ModelFloatInput | null,
  imageURI?: ModelStringInput | null,
  mediumImageURI?: ModelStringInput | null,
  thumbnailImageURI?: ModelStringInput | null,
  operatingHours?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items?:  Array<Restaurant | null > | null,
  nextToken?: string | null,
};

export type SearchableRestaurantFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  stars?: SearchableFloatFilterInput | null,
  address?: SearchableStringFilterInput | null,
  location?: SearchableFloatFilterInput | null,
  imageURI?: SearchableStringFilterInput | null,
  mediumImageURI?: SearchableStringFilterInput | null,
  thumbnailImageURI?: SearchableStringFilterInput | null,
  operatingHours?: SearchableStringFilterInput | null,
  and?: Array< SearchableRestaurantFilterInput | null > | null,
  or?: Array< SearchableRestaurantFilterInput | null > | null,
  not?: SearchableRestaurantFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableRestaurantSortInput = {
  field?: SearchableRestaurantSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRestaurantSortableFields {
  id = "id",
  name = "name",
  description = "description",
  stars = "stars",
  address = "address",
  location = "location",
  imageURI = "imageURI",
  mediumImageURI = "mediumImageURI",
  thumbnailImageURI = "thumbnailImageURI",
  operatingHours = "operatingHours",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableRestaurantConnection = {
  __typename: "SearchableRestaurantConnection",
  items?:  Array<Restaurant | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDishMutationVariables = {
  input: CreateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type CreateDishMutation = {
  createDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateDishMutationVariables = {
  input: UpdateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type UpdateDishMutation = {
  updateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteDishMutationVariables = {
  input: DeleteDishInput,
  condition?: ModelDishConditionInput | null,
};

export type DeleteDishMutation = {
  deleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateDishMenuMutationVariables = {
  input: CreateDishMenuInput,
  condition?: ModelDishMenuConditionInput | null,
};

export type CreateDishMenuMutation = {
  createDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateDishMenuMutationVariables = {
  input: UpdateDishMenuInput,
  condition?: ModelDishMenuConditionInput | null,
};

export type UpdateDishMenuMutation = {
  updateDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteDishMenuMutationVariables = {
  input: DeleteDishMenuInput,
  condition?: ModelDishMenuConditionInput | null,
};

export type DeleteDishMenuMutation = {
  deleteDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateEventRestaurantMutationVariables = {
  input: CreateEventRestaurantInput,
  condition?: ModelEventRestaurantConditionInput | null,
};

export type CreateEventRestaurantMutation = {
  createEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateEventRestaurantMutationVariables = {
  input: UpdateEventRestaurantInput,
  condition?: ModelEventRestaurantConditionInput | null,
};

export type UpdateEventRestaurantMutation = {
  updateEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteEventRestaurantMutationVariables = {
  input: DeleteEventRestaurantInput,
  condition?: ModelEventRestaurantConditionInput | null,
};

export type DeleteEventRestaurantMutation = {
  deleteEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateOrderItemMutationVariables = {
  input: CreateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  input: UpdateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  input: DeleteOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type NearbyRestaurantsQueryVariables = {
  location: Array< number | null >,
  distance?: string | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NearbyRestaurantsQuery = {
  nearbyRestaurants?:  {
    __typename: "RestaurantConnection",
    items?:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type LsAuthQueryVariables = {
  appId?: string | null,
  secret?: string | null,
};

export type LsAuthQuery = {
  lsAuth?: string | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderItemQueryVariables = {
  id: string,
};

export type GetOrderItemQuery = {
  getOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items?:  Array< {
      __typename: "OrderItem",
      id: string,
      orderId: string,
      dishId: string,
      quantity: number,
      createdAt: string,
      updatedAt: string,
      dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description: string,
        stars: number,
        price: number,
        ingredients?: Array< string | null > | null,
        imageURI: string,
        mediumImageURI: string,
        thumbnailImageURI: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      restaurantId: string,
      items?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      restaurant?:  {
        __typename: "Restaurant",
        id: string,
        name: string,
        description: string,
        stars: number,
        address: string,
        location: Array< number | null >,
        imageURI: string,
        mediumImageURI: string,
        thumbnailImageURI: string,
        operatingHours: Array< string | null >,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items?:  Array< {
      __typename: "Review",
      id: string,
      dishId: string,
      restaurantId: string,
      title: string,
      stars: number,
      content: string,
      reviewerId: string,
      reviewer?:  {
        __typename: "User",
        id: string,
        username: string,
        avatarURI: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDishQueryVariables = {
  id: string,
};

export type GetDishQuery = {
  getDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishesQuery = {
  listDishes?:  {
    __typename: "ModelDishConnection",
    items?:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items?:  Array< {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      dishTypes?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      restaurants?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items?:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchRestaurantsQueryVariables = {
  filter?: SearchableRestaurantFilterInput | null,
  sort?: SearchableRestaurantSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchRestaurantsQuery = {
  searchRestaurants?:  {
    __typename: "SearchableRestaurantConnection",
    items?:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    avatarURI: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderItemSubscription = {
  onCreateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderItemSubscription = {
  onUpdateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderItemSubscription = {
  onDeleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderId: string,
    dishId: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    restaurantId: string,
    items?:  {
      __typename: "ModelOrderItemConnection",
      items?:  Array< {
        __typename: "OrderItem",
        id: string,
        orderId: string,
        dishId: string,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    dishId: string,
    restaurantId: string,
    title: string,
    stars: number,
    content: string,
    reviewerId: string,
    reviewer?:  {
      __typename: "User",
      id: string,
      username: string,
      avatarURI: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateDishSubscription = {
  onCreateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateDishSubscription = {
  onUpdateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteDishSubscription = {
  onDeleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description: string,
    stars: number,
    price: number,
    ingredients?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    restaurantId: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    dishes?:  {
      __typename: "ModelDishMenuConnection",
      items?:  Array< {
        __typename: "DishMenu",
        id: string,
        dishId: string,
        menuId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateDishMenuSubscription = {
  onCreateDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateDishMenuSubscription = {
  onUpdateDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteDishMenuSubscription = {
  onDeleteDishMenu?:  {
    __typename: "DishMenu",
    id: string,
    dishId: string,
    menuId: string,
    createdAt: string,
    updatedAt: string,
    dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    menu?:  {
      __typename: "Menu",
      id: string,
      restaurantId: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      dishes?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    dishTypes?: Array< string | null > | null,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    createdAt: string,
    updatedAt: string,
    restaurants?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    description: string,
    stars: number,
    address: string,
    location: Array< number | null >,
    imageURI: string,
    mediumImageURI: string,
    thumbnailImageURI: string,
    operatingHours: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items?:  Array< {
        __typename: "Review",
        id: string,
        dishId: string,
        restaurantId: string,
        title: string,
        stars: number,
        content: string,
        reviewerId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items?:  Array< {
        __typename: "Menu",
        id: string,
        restaurantId: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventRestaurantConnection",
      items?:  Array< {
        __typename: "EventRestaurant",
        id: string,
        eventId: string,
        restaurantId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateEventRestaurantSubscription = {
  onCreateEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateEventRestaurantSubscription = {
  onUpdateEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteEventRestaurantSubscription = {
  onDeleteEventRestaurant?:  {
    __typename: "EventRestaurant",
    id: string,
    eventId: string,
    restaurantId: string,
    createdAt: string,
    updatedAt: string,
    event?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description: string,
      stars: number,
      price: number,
      ingredients?: Array< string | null > | null,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelDishMenuConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      description: string,
      stars: number,
      address: string,
      location: Array< number | null >,
      imageURI: string,
      mediumImageURI: string,
      thumbnailImageURI: string,
      operatingHours: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        nextToken?: string | null,
      } | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventRestaurantConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
