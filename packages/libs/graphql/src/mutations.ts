/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      orderId
      dishId
      quantity
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      orderId
      dishId
      quantity
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      orderId
      dishId
      quantity
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      restaurantId
      items {
        items {
          id
          orderId
          dishId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      restaurantId
      items {
        items {
          id
          orderId
          dishId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      restaurantId
      items {
        items {
          id
          orderId
          dishId
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      dishId
      restaurantId
      title
      stars
      content
      reviewerId
      reviewer {
        id
        username
        avatarURI
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      dishId
      restaurantId
      title
      stars
      content
      reviewerId
      reviewer {
        id
        username
        avatarURI
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      dishId
      restaurantId
      title
      stars
      content
      reviewerId
      reviewer {
        id
        username
        avatarURI
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      name
      description
      stars
      price
      ingredients
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      name
      description
      stars
      price
      ingredients
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      name
      description
      stars
      price
      ingredients
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      restaurantId
      type
      createdAt
      updatedAt
      dishes {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      restaurantId
      type
      createdAt
      updatedAt
      dishes {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      restaurantId
      type
      createdAt
      updatedAt
      dishes {
        items {
          id
          dishId
          menuId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createDishMenu = /* GraphQL */ `
  mutation CreateDishMenu(
    $input: CreateDishMenuInput!
    $condition: ModelDishMenuConditionInput
  ) {
    createDishMenu(input: $input, condition: $condition) {
      id
      dishId
      menuId
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      menu {
        id
        restaurantId
        type
        createdAt
        updatedAt
        dishes {
          nextToken
        }
      }
    }
  }
`;
export const updateDishMenu = /* GraphQL */ `
  mutation UpdateDishMenu(
    $input: UpdateDishMenuInput!
    $condition: ModelDishMenuConditionInput
  ) {
    updateDishMenu(input: $input, condition: $condition) {
      id
      dishId
      menuId
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      menu {
        id
        restaurantId
        type
        createdAt
        updatedAt
        dishes {
          nextToken
        }
      }
    }
  }
`;
export const deleteDishMenu = /* GraphQL */ `
  mutation DeleteDishMenu(
    $input: DeleteDishMenuInput!
    $condition: ModelDishMenuConditionInput
  ) {
    deleteDishMenu(input: $input, condition: $condition) {
      id
      dishId
      menuId
      createdAt
      updatedAt
      dish {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      menu {
        id
        restaurantId
        type
        createdAt
        updatedAt
        dishes {
          nextToken
        }
      }
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      dishTypes
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      restaurants {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      dishTypes
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      restaurants {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      dishTypes
      imageURI
      mediumImageURI
      thumbnailImageURI
      createdAt
      updatedAt
      restaurants {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      stars
      address
      location
      imageURI
      mediumImageURI
      thumbnailImageURI
      operatingHours
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          restaurantId
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      stars
      address
      location
      imageURI
      mediumImageURI
      thumbnailImageURI
      operatingHours
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          restaurantId
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      description
      stars
      address
      location
      imageURI
      mediumImageURI
      thumbnailImageURI
      operatingHours
      createdAt
      updatedAt
      reviews {
        items {
          id
          dishId
          restaurantId
          title
          stars
          content
          reviewerId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      menus {
        items {
          id
          restaurantId
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          eventId
          restaurantId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createEventRestaurant = /* GraphQL */ `
  mutation CreateEventRestaurant(
    $input: CreateEventRestaurantInput!
    $condition: ModelEventRestaurantConditionInput
  ) {
    createEventRestaurant(input: $input, condition: $condition) {
      id
      eventId
      restaurantId
      createdAt
      updatedAt
      event {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
    }
  }
`;
export const updateEventRestaurant = /* GraphQL */ `
  mutation UpdateEventRestaurant(
    $input: UpdateEventRestaurantInput!
    $condition: ModelEventRestaurantConditionInput
  ) {
    updateEventRestaurant(input: $input, condition: $condition) {
      id
      eventId
      restaurantId
      createdAt
      updatedAt
      event {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
    }
  }
`;
export const deleteEventRestaurant = /* GraphQL */ `
  mutation DeleteEventRestaurant(
    $input: DeleteEventRestaurantInput!
    $condition: ModelEventRestaurantConditionInput
  ) {
    deleteEventRestaurant(input: $input, condition: $condition) {
      id
      eventId
      restaurantId
      createdAt
      updatedAt
      event {
        id
        name
        description
        stars
        price
        ingredients
        imageURI
        mediumImageURI
        thumbnailImageURI
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
      }
      restaurant {
        id
        name
        description
        stars
        address
        location
        imageURI
        mediumImageURI
        thumbnailImageURI
        operatingHours
        createdAt
        updatedAt
        reviews {
          nextToken
        }
        menus {
          nextToken
        }
        events {
          nextToken
        }
      }
    }
  }
`;
