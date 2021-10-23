import React from "react";
import ProductService from "../../app/productService";
import { withRouter } from "react-router-dom";

const initialState = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
  errors: [],
  update: false,
};

class RegistrationProduct extends React.Component {
  state = initialState;

  constructor() {
    super();
    this.service = new ProductService();
  }

  onChange = (e) => {
    const valor = e.target.value;
    const nomeDoCampo = e.target.name;

    this.setState({
      [nomeDoCampo]: valor,
    });
  };

  onSubmit = (e) => {
    const product = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    try {
      this.service.save(product);
      this.cleanFields();
      this.setState({ sucesso: true });
    } catch (error) {
      const errors = error.errors;
      this.setState({ errors: errors });
    }
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const result = this.service.getProducts().filter((product) => product.sku === sku);
      if (result.length === 1) {
        const productFound = result[0];
        this.setState({ ...productFound, update: true });
      }
    }
  }

  cleanFields = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">{this.state.update ? "Atualização " : "Cadastro "} de produto</div>
          <div className="card-body">
            {this.state.sucesso && (
              <div class="alert alert-dismissible alert-success">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Perfeito!</strong> Produto Cadastrado Com Sucesso
              </div>
            )}

            {this.state.errors.length > 0 &&
              this.state.errors.map((error) => (
                <div class="alert alert-dismissible alert-danger">
                  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                  <strong>Erro</strong>
                  {error}
                </div>
              ))}

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nome: *</label>
                  <input
                    type="text"
                    name="nome"
                    value={this.state.nome}
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>SKU: *</label>
                  <input
                    type="text"
                    name="sku"
                    disabled={this.props.update}
                    value={this.state.sku}
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descrição:</label>
                  <textarea
                    className="form-control"
                    name="descricao"
                    value={this.state.descricao}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Preço: *</label>
                  <input
                    type="text"
                    name="preco"
                    value={this.state.preco}
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Fornecedor: *</label>
                  <input
                    type="text"
                    name="fornecedor"
                    value={this.state.fornecedor}
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-1">
                <button className="btn btn-success" onClick={this.onSubmit}>
                  {this.state.update ? "Atualizar " : "Salvar "}
                </button>
              </div>
              <div className="col-md-1">
                <button className="btn btn-primary" onClick={this.cleanFields}>
                  Limpar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegistrationProduct);
