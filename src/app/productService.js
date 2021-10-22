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

  save = (product) => {
    this.validate(product);

    let products = localStorage.getItem(PRODUCTS);

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }

    products.push(product);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
  };
}
