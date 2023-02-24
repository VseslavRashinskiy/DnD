import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Showers = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [turn1, setTurn1] = useState(localStorage.getItem('Shower 1') || 'Выкл');
  const turnSwitch1 = () => {
    if (turn1 === 'Выкл') {
      localStorage.setItem('Shower 1', 'Вкл');
      setTurn1('Вкл');
    } else {
      setTurn1('Выкл');
      localStorage.setItem('Shower 1', 'Выкл');
    }
  };

  const [turn2, setTurn2] = useState(localStorage.getItem('Shower 2') || 'Выкл');
  const turnSwitch2 = () => {
    if (turn2 === 'Выкл') {
      localStorage.setItem('Shower 2', 'Вкл');
      setTurn2('Вкл');
    } else {
      setTurn2('Выкл');
      localStorage.setItem('Shower 2', 'Выкл');
    }
  };

  const [turn3, setTurn3] = useState(localStorage.getItem('Shower 3') || 'Выкл');
  const turnSwitch3 = () => {
    if (turn3 === 'Выкл') {
      localStorage.setItem('Shower 3', 'Вкл');
      setTurn3('Вкл');
    } else {
      setTurn3('Выкл');
      localStorage.setItem('Shower 3', 'Выкл');
    }
  };

  const [turn4, setTurn4] = useState(localStorage.getItem('Shower 4') || 'Выкл');
  const turnSwitch4 = () => {
    if (turn4 === 'Выкл') {
      localStorage.setItem('Shower 4', 'Вкл');
      setTurn4('Вкл');
    } else {
      setTurn4('Выкл');
      localStorage.setItem('Shower 4', 'Выкл');
    }
  };

  const [turn5, setTurn5] = useState(localStorage.getItem('Shower 5') || 'Выкл');
  const turnSwitch5 = () => {
    if (turn5 === 'Выкл') {
      localStorage.setItem('Shower 5', 'Вкл');
      setTurn5('Вкл');
    } else {
      setTurn5('Выкл');
      localStorage.setItem('Shower 5', 'Выкл');
    }
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
        <button style={{ color: 'red', pointerEvents: 'none' }}>
          &gt; Душевая 5 :: НЕ РАБОТАЕТ
        </button>
        <button onClick={turnSwitch5}>&gt; Душевая 6 :: {turn5}.</button>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Showers;
