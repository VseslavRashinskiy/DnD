import React from 'react';
import { useNavigate } from 'react-router-dom';

const Showers = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Душевые</div>
        <div>=======</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>&gt; Душевая 1 :: Выкл.</div>
        <div>&gt; Душевая 2 :: Выкл.</div>
        <div>&gt; Душевая 3 :: Выкл.</div>
        <div>&gt; Душевая 4 :: Выкл.</div>
        <div style={{ color: 'red' }}>&gt; Душевая 5 :: НЕ РАБОТАЕТ</div>
        <div>&gt; Душевая 6 :: Выкл.</div>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Showers;
