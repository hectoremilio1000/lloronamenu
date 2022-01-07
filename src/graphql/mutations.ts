/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProductos = /* GraphQL */ `
  mutation CreateProductos(
    $input: CreateProductosInput!
    $condition: ModelProductosConditionInput
  ) {
    createProductos(input: $input, condition: $condition) {
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
export const updateProductos = /* GraphQL */ `
  mutation UpdateProductos(
    $input: UpdateProductosInput!
    $condition: ModelProductosConditionInput
  ) {
    updateProductos(input: $input, condition: $condition) {
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
export const deleteProductos = /* GraphQL */ `
  mutation DeleteProductos(
    $input: DeleteProductosInput!
    $condition: ModelProductosConditionInput
  ) {
    deleteProductos(input: $input, condition: $condition) {
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
