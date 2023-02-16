import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gateways = () => {
  const [turn, setTurn] = useState('Закрыт');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const turnSwitch = () => {
    turn === 'Закрыт' ? setTurn('Открыт') : setTurn('Закрыт');
  };

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Шлюзы</div>
        <div>=====</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <button>&gt; Стыковочный Отсек_01 :: ШЛЮЗ Закрыт.</button>
        <button onClick={turnSwitch}>&gt; Стыковочный Отсек_02 :: ШЛЮЗ {turn}.</button>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};
export default Gateways;
