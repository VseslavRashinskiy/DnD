import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const System = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Система</div>
        <div>=======</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <RouterLink to={`life`}>&gt; Система Поддержки Жизнеобеспечения</RouterLink>
        <RouterLink to={`self-destruct`}>&gt; Система Самоуничтожения Станции</RouterLink>
      </div>
      <div style={{ paddingBottom: 30 }}>==========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default System;
