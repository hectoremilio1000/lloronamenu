/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titleMenu
        titleCategorias
        productos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      titleMenu
      titleCategorias
      productos {
        items {
          id
          nombre
          poster
          origen
          estilo
          sabores
          precio
          reconocimiento
          porcentaje
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titleMenu
        titleCategorias
        productos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductos = /* GraphQL */ `
  query SyncProductos(
    $filter: ModelProductosFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        poster
        origen
        estilo
        sabores
        precio
        reconocimiento
        porcentaje
        categoryID
        category {
          id
          titleMenu
          titleCategorias
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductos = /* GraphQL */ `
  query GetProductos($id: ID!) {
    getProductos(id: $id) {
      id
      nombre
      poster
      origen
      estilo
      sabores
      precio
      reconocimiento
      porcentaje
      categoryID
      category {
        id
        titleMenu
        titleCategorias
        productos {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProductoss = /* GraphQL */ `
  query ListProductoss(
    $filter: ModelProductosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        poster
        origen
        estilo
        sabores
        precio
        reconocimiento
        porcentaje
        categoryID
        category {
          id
          titleMenu
          titleCategorias
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
