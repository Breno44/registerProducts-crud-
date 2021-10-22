import React from "react";

export default class RegistrationProduct extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Cadastro de produto</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nome: *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>SKU: *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descrição:</label>
                  <textarea className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Preço: *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Fornecedor: *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-1">
                <button className="btn btn-success">Salvar</button>
              </div>
              <div className="col-md-1">
                <button className="btn btn-primary">Limpar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
