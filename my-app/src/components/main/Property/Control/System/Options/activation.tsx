import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Activation = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [turn, setTurn] = useState('Выкл');
  const turnSwitch = () => {
    turn === 'Выкл' ? setTurn('Вкл') : setTurn('Выкл');
  };

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Активация Системы Самоуничтожения станции</div>
        <div>===============================</div>
      </div>
      <div style={{ color: 'red', paddingBottom: 50 }}>
        ЭТА ФУНКЦИЯ АКТИВИРУЕТ 10-МИНУТНУЮ ПОСЛЕДОВАТЕЛЬНОСТЬ САМОУНИЧТОЖЕНИЯ.
      </div>
      <div style={{ color: 'red', paddingBottom: 50 }}>
        ПОСЛЕ АКТИВАЦИИ ПОСЛЕДОВАТЕЛЬНОСТЬ НЕВОЗМОЖНО ПРЕДОТВРАТИТЬ.
      </div>
      <div style={{ color: 'red', paddingBottom: 50 }}>НАПИШИТЕ ‘OK’ ЧТОБЫ ЗАПУСТИТЬ ТАЙМЕР: </div>
      <div style={{ paddingBottom: 30 }}>===============</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Activation;
