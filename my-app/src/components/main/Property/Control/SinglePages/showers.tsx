import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Showers = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [turn1, setTurn1] = useState('Выкл');
  const turnSwitch1 = () => {
    turn1 === 'Выкл' ? setTurn1('Вкл') : setTurn1('Выкл');
  };
  const [turn2, setTurn2] = useState('Выкл');
  const turnSwitch2 = () => {
    turn2 === 'Выкл' ? setTurn2('Вкл') : setTurn2('Выкл');
  };
  const [turn3, setTurn3] = useState('Выкл');
  const turnSwitch3 = () => {
    turn3 === 'Выкл' ? setTurn3('Вкл') : setTurn3('Выкл');
  };
  const [turn4, setTurn4] = useState('Выкл');
  const turnSwitch4 = () => {
    turn4 === 'Выкл' ? setTurn4('Вкл') : setTurn4('Выкл');
  };
  const [turn5, setTurn5] = useState('Выкл');
  const turnSwitch5 = () => {
    turn5 === 'Выкл' ? setTurn5('Вкл') : setTurn5('Выкл');
  };

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Душевые</div>
        <div>=======</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <button onClick={turnSwitch1}>&gt; Душевая 1 :: {turn1}.</button>
        <button onClick={turnSwitch2}>&gt; Душевая 2 :: {turn2}.</button>
        <button onClick={turnSwitch3}>&gt; Душевая 3 :: {turn3}.</button>
        <button onClick={turnSwitch4}>&gt; Душевая 4 :: {turn4}.</button>
        <button style={{ color: 'red' }}>&gt; Душевая 5 :: НЕ РАБОТАЕТ</button>
        <button onClick={turnSwitch5}>&gt; Душевая 6 :: {turn5}.</button>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Showers;
