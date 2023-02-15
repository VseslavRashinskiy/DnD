import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HydroponicsLab = () => {
  const [turn, setTurn] = useState('Выкл');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const turnSwitch = () => {
    turn === 'Выкл' ? setTurn('Вкл') : setTurn('Выкл');
  };

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Лаборатория Гидропоники</div>
        <div>=======================</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <button onClick={turnSwitch}>&gt; Распылители :: {turn}</button>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default HydroponicsLab;
