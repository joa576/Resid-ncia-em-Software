import './config-campos.css';

function ConfigCampos() {
  return (
    <div className="container">
      <div className="config-box">
        <h1>Configuração de Campos</h1>
        <form>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Token
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Data de assinatura
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Status de Pagamento
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Empresa
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> CPF/CNPJ
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Departamento
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Produto Comprado
            </label>
          </div>
          <button type="submit" className="save-button">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default ConfigCampos;
