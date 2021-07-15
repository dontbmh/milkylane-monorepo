/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($owner: String) {
    onCreateReview(owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($owner: String) {
    onUpdateReview(owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($owner: String) {
    onDeleteReview(owner: $owner) {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateDishMenu = /* GraphQL */ `
  subscription OnCreateDishMenu {
    onCreateDishMenu {
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
export const onUpdateDishMenu = /* GraphQL */ `
  subscription OnUpdateDishMenu {
    onUpdateDishMenu {
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
export const onDeleteDishMenu = /* GraphQL */ `
  subscription OnDeleteDishMenu {
    onDeleteDishMenu {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateEventRestaurant = /* GraphQL */ `
  subscription OnCreateEventRestaurant {
    onCreateEventRestaurant {
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
export const onUpdateEventRestaurant = /* GraphQL */ `
  subscription OnUpdateEventRestaurant {
    onUpdateEventRestaurant {
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
export const onDeleteEventRestaurant = /* GraphQL */ `
  subscription OnDeleteEventRestaurant {
    onDeleteEventRestaurant {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String) {
    onCreateOrderItem(owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String) {
    onUpdateOrderItem(owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String) {
    onDeleteOrderItem(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
      id
      restaurantId
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
      owner
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      id
      restaurantId
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
      owner
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      id
      restaurantId
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
      owner
    }
  }
`;
