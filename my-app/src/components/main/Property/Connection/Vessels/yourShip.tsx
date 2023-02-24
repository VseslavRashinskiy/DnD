import React from 'react';
import { useNavigate } from 'react-router-dom';

const YourShip = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>ОБМЕН ПАКЕТОВ ДАННЫХ</div>
        <div>====================</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>.....................................</div>
        <div>.....................................</div>
      </div>
      <div style={{ paddingBottom: 30 }}>КАНАЛ СВЯЗИ ОТКРЫТ</div>
      <div style={{ paddingBottom: 30 }}>========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default YourShip;
