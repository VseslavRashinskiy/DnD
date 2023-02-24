import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SelfDestruct = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Система Самоуничтожения Станции</div>
        <div>===============================</div>
      </div>
      <div style={{ color: 'red', paddingBottom: 30 }}>
        ВНИМАНИЕ: Намеренное приченение вреда собственности кампании является прямым нарушением
        правила компании #2778-B. ISHIYAMA DYNAMICS не несет никакой ответственности или
        обязательств в результате неправильного использования этой функции.
      </div>
      <div style={{ paddingBottom: 30 }}>===========================================</div>
      <div style={{ paddingBottom: 30 }}>
        <RouterLink to={`activation`}>&gt; Активация Системы Самоуничтожения станции</RouterLink>
      </div>
      <div style={{ paddingBottom: 30 }}>===========================================</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default SelfDestruct;
