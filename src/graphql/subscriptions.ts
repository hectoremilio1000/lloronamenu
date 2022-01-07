/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateProductos = /* GraphQL */ `
  subscription OnCreateProductos {
    onCreateProductos {
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
export const onUpdateProductos = /* GraphQL */ `
  subscription OnUpdateProductos {
    onUpdateProductos {
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
export const onDeleteProductos = /* GraphQL */ `
  subscription OnDeleteProductos {
    onDeleteProductos {
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
