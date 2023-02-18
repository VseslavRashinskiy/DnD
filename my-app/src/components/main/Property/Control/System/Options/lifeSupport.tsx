import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LifeSupport = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [turn, setTurn] = useState(localStorage.getItem('LSS') || 'Выкл');
  const turnSwitch = () => {
    if (turn === 'Выкл') {
      localStorage.setItem('LSS', 'Вкл');
      setTurn('Вкл');
    } else {
      setTurn('Выкл');
      localStorage.setItem('LSS', 'Выкл');
    }
  };

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Система Поддержки Жизнеобеспечения</div>
        <div>==================================</div>
      </div>
      <div style={{ color: 'red', paddingBottom: 30 }}>
        ВНИМАНИЕ: Отключение системы поддержки жизнеобеспечения на станции является прямым
        нарушением правила компании #2778-А. ISHIYAMA DYNAMICS не несет никакой ответственности или
        обязательств в результате неправильного использования этой функции.
      </div>
      <div style={{ paddingBottom: 30 }}>=============================================</div>
      <div style={{ paddingBottom: 30 }}>
        <button onClick={turnSwitch}>&gt; Система Поддержки Жизнеобеспечения :: {turn}..</button>
      </div>
      <div style={{ paddingBottom: 30 }}>=============================================</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default LifeSupport;
