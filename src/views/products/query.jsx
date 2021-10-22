import React from "react";
import ProductService from "../../app/productService";
import { withRouter } from "react-router-dom";

class Query extends React.Component {
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

  initEdit = (sku) => {
    this.props.history.push(`/cadastro-produtos/${sku}`);
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
                    <td>{product.nome}</td>
                    <td>{product.sku}</td>
                    <td>{product.preco}</td>
                    <td>{product.fornecedor}</td>
                    <td>
                      <button onClick={() => this.initEdit(product.sku)} className="btn btn-primary">
                        Editar
                      </button>
                      <button className="btn btn-danger">Remover</button>
                    </td>
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

export default withRouter(Query);
