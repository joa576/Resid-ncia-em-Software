import { useState } from 'react';
import './Header.css';
import ConfirmarImg from '../assets/Confirmar.png';
import SetaparabaixoImg from '../assets/Setaparabaixo.png';

function Header() {
  const [activeTab, setActiveTab] = useState(null);
  const [token, setToken] = useState('');
  const [visibleSections, setVisibleSections] = useState([]);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const confirmToken = () => {
    if (token === '#000001') {
      setVisibleSections(['ID', 'EMAIL', 'CARGO', 'TELEFONE', 'CPF']);
    } else if (token === '#000002') {
      setVisibleSections(['TELEFONE', 'CPF']);
    } else {
      alert('Token inválido!');
      setVisibleSections([]);
    }
  };

  const tabClicked = (contentId) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === contentId ? null : contentId));
  };

  return (
    <div className="bordadefundo">
      <center>
        <div className="nomecliente2">Cliente: Iago Silva Santos</div>
      </center>

      <div className="token-container">
        <th htmlFor="token-input">INSIRA SEU TOKEN:</th>
        <input
          id="token-input"
          className="token"
          value={token}
          onChange={handleTokenChange}
        />
        <img
          src={ConfirmarImg}
          className="confirmar"
          alt="confirmar"
          onClick={confirmToken}
        />
      </div>

      {visibleSections.includes('ID') && (
        <div className="info" id="info-token">
          <h2>ID</h2>
          <button
            className={`tab-btn ${activeTab === 'token' ? 'active' : ''}`}
            onClick={() => tabClicked('token')}
          >
            <img
              src={SetaparabaixoImg}
              className="arrow"
              style={{
                transform: activeTab === 'token' ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              alt="abrir"
            />
          </button>
          <div
            id="token-content"
            className={`content ${activeTab === 'token' ? 'show' : ''}`}
          >
            <p>XXX</p>
          </div>
        </div>
      )}

      {visibleSections.includes('EMAIL') && (
        <div className="info" id="info-datadeassinatura">
          <h2>E-MAIL</h2>
          <button
            className={`tab-btn ${activeTab === 'datadeassinatura' ? 'active' : ''}`}
            onClick={() => tabClicked('datadeassinatura')}
          >
            <img
              src={SetaparabaixoImg}
              className="arrow"
              style={{
                transform: activeTab === 'datadeassinatura'
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
              }}
              alt="abrir"
            />
          </button>
          <div
            id="datadeassinatura-content"
            className={`content ${activeTab === 'datadeassinatura' ? 'show' : ''}`}
          >
            <p>XXX</p>
          </div>
        </div>
      )}

      {visibleSections.includes('CARGO') && (
        <div className="info" id="info-ultimopagamento">
          <h2>CARGO</h2>
          <button
            className={`tab-btn ${activeTab === 'ultimopagamento' ? 'active' : ''}`}
            onClick={() => tabClicked('ultimopagamento')}
          >
            <img
              src={SetaparabaixoImg}
              className="arrow"
              style={{
                transform: activeTab === 'ultimopagamento'
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
              }}
              alt="abrir"
            />
          </button>
          <div
            id="ultimopagamento-content"
            className={`content ${activeTab === 'ultimopagamento' ? 'show' : ''}`}
          >
            <p>XXX</p>
          </div>
        </div>
      )}

      {visibleSections.includes('TELEFONE') && (
        <div className="info" id="info-statusdepagamento">
          <h2>TELEFONE</h2>
          <button
            className={`tab-btn ${activeTab === 'statusdepagamento' ? 'active' : ''}`}
            onClick={() => tabClicked('statusdepagamento')}
          >
            <img
              src={SetaparabaixoImg}
              className="arrow"
              style={{
                transform: activeTab === 'statusdepagamento'
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
              }}
              alt="abrir"
            />
          </button>
          <div
            id="statusdepagamento-content"
            className={`content ${activeTab === 'statusdepagamento' ? 'show' : ''}`}
          >
            <p>XXX</p>
          </div>
        </div>
      )}

      {visibleSections.includes('CPF') && (
        <div className="info" id="info-CPF">
          <h2>CPF</h2>
          <button
            className={`tab-btn ${activeTab === 'CPF' ? 'active' : ''}`}
            onClick={() => tabClicked('CPF')}
          >
            <img
              src={SetaparabaixoImg}
              className="arrow"
              style={{
                transform: activeTab === 'CPF' ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              alt="abrir"
            />
          </button>
          <div
            id="CPF-content"
            className={`content ${activeTab === 'CPF' ? 'show' : ''}`}
          >
            <p>XXX</p>
          </div>
        </div>
      )}
      <center>
        <button className="config">Configurar Campos</button>
      </center>
    </div>
  );
}

export default Header;
