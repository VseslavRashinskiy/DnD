import React from 'react';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Карта станции</div>
        <div>=============</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>Копия карты станции теперь доступна на вашем КПК</div>
        <div>==========</div>
      </div>
      <button onClick={goBack}>&gt; Назад</button>
      <img
        style={{ display: 'block', margin: '0 auto' }}
        src="https://i.ibb.co/N3S1M0v/Map-01-1.png"
        alt="map"
      />
    </div>
  );
};

export default Map;
