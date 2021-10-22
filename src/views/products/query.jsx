import React from "react";

export default class Query extends React.Component {
  state = {
    products: [],
  };

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
                    <td>{product.name}</td>
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
