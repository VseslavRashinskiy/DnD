import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Connection = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Связь</div>
        <div>=====</div>
      </div>
      <div style={{ paddingBottom: 30 }}>2 корабля в зоне досягаемости </div>
      <div style={{ paddingBottom: 30 }}>
        <RouterLink to={`yourship`}>&gt; Контакт с ВАШКОРАБЛЬ</RouterLink>
        <RouterLink to={`hercules`}>&gt; Контакт с Геркулес</RouterLink>
      </div>
      <div style={{ paddingBottom: 30 }}>==========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Connection;
