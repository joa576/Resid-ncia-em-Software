import { useState } from 'react';
import './Header.css';
import ConfirmarImg from '../assets/Confirmar.png';
import SetaparabaixoImg from '../assets/Setaparabaixo.png';

  function Header() {
  const [activeTab, setActiveTab] = useState(null);

  const tabClicked = (contentId) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === contentId ? null : contentId));
  };

  return (
    <>
    <div className="bordadefundo">
      <center>
        <div className="nomecliente2">Cliente: Iago Silva Santos</div>
      </center>

      <div className="token-container">
        <th>INSIRA SEU TOKEN:</th>
        <input className="token" />
        <img 
          src={ConfirmarImg} 
          className="confirmar" 
          alt="confirmar" 
        />
      </div>

      <div className="info" id="info-token">
        <h2>ID</h2>
        <button 
          className={`tab-btn ${activeTab === 'token' ? 'active' : ''}`} 
          onClick={() => tabClicked('token')}
        >
          <img
            src={SetaparabaixoImg}
            className="arrow"
            style={{ transform: activeTab === 'token' ? 'rotate(180deg)' : 'rotate(0deg)' }}
            alt="abrir"
          />
        </button>
        <div id="token-content" className={`content ${activeTab === 'token' ? 'show' : ''}`}>
          <p>XXX</p>
        </div>
      </div>

      <div className="info" id="info-datadeassinatura">
        <h2>E-MAIL</h2>
        <button
          className={`tab-btn ${activeTab === 'datadeassinatura' ? 'active' : ''}`}
          onClick={() => tabClicked('datadeassinatura')}
        >
          <img
            src={SetaparabaixoImg}
            className="arrow"
            style={{ transform: activeTab === 'datadeassinatura' ? 'rotate(180deg)' : 'rotate(0deg)' }}
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

      <div className="info" id="info-ultimopagamento">
        <h2>CARGO</h2>
        <button
          className={`tab-btn ${activeTab === 'ultimopagamento' ? 'active' : ''}`}
          onClick={() => tabClicked('ultimopagamento')}
        >
          <img
            src={SetaparabaixoImg}
            className="arrow"
            style={{ transform: activeTab === 'ultimopagamento' ? 'rotate(180deg)' : 'rotate(0deg)' }}
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

      <div className="info" id="info-statusdepagamento">
        <h2>TELEFONE</h2>
        <button
          className={`tab-btn ${activeTab === 'statusdepagamento' ? 'active' : ''}`}
          onClick={() => tabClicked('statusdepagamento')}
        >
          <img
            src={SetaparabaixoImg}
            className="arrow"
            style={{ transform: activeTab === 'statusdepagamento' ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
    </div>
    </>
  );
}
      
export default Header;