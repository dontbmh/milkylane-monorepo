/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyRestaurants = /* GraphQL */ `
  query NearbyRestaurants(
    $location: [Float]!
    $distance: String
    $limit: Int
    $nextToken: String
  ) {
    nearbyRestaurants(
      location: $location
      distance: $distance
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const lsAuth = /* GraphQL */ `
  query LsAuth($appId: String, $secret: String) {
    lsAuth(appId: $appId, secret: $secret)
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      avatarURI
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        avatarURI
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
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
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restaurantId
        type
        createdAt
        updatedAt
        dishes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchRestaurants = /* GraphQL */ `
  query SearchRestaurants(
    $filter: SearchableRestaurantFilterInput
    $sort: SearchableRestaurantSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRestaurants(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        items {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
