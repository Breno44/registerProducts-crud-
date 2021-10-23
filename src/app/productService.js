const PRODUCTS = "_PRODUCTS";

export function ErrorValidation(errors) {
  this.errors = errors;
}

export default class ProductService {
  validate = (product) => {
    const errors = [];

    if (!product.nome) errors.push(" o campo Nome é Obrigatorio");
    if (!product.sku) errors.push(" o campo Sku é Obrigatorio");
    if (!product.preco || product.preco.length <= 0) errors.push(" o campo preço deve ser maior que 0");
    if (!product.fornecedor) errors.push(" o campo fornecedor é Obrigatorio");

    if (errors.length) throw new ErrorValidation(errors);
  };

  getProducts = () => {
    const products = localStorage.getItem(PRODUCTS);
    if (!products) return [];
    return JSON.parse(products);
  };

  getIndex = (sku) => {
    let index = null;
    this.getProducts().forEach((product, i) => {
      if (product.sku === sku) {
        index = i;
      }
    });

    return index;
  };

  delete = (sku) => {
    const index = this.getIndex(sku);
    if (index !== null) {
      const products = this.getProducts();
      products.splice(index, 1);
      localStorage.setItem(PRODUCTS, JSON.stringify(products));
      return products;
    }
  };

  save = (product) => {
    this.validate(product);

    let products = localStorage.getItem(PRODUCTS);

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }

    const index = this.getProducts(product.sku);
    if (index === null) {
      products.push(product);
    } else {
      products[index] = product;
    }

    products.push(product);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
  };
}
