import React from "react";
import ProductService from "../../app/productService";

export default class Query extends React.Component {
  state = {
    products: [],
  };

  constructor() {
    super();
    this.service = new ProductService();
  }

  componentDidMount() {
    const products = this.service.getProducts();
    this.setState({ products });
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Consulta de produtos</div>
          <div className="card-body"></div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, key) => {
                return (
                  <tr key={key}>
                    <td>{product.nome}</td>
                    <td>{product.sku}</td>
                    <td>{product.preco}</td>
                    <td>{product.fornecedor}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
