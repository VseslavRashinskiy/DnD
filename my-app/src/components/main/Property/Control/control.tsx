import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Control = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Управление</div>
        <div>==========</div>
      </div>
      <div style={{ paddingBottom: 30 }}> [A] :: Требуется доступ администратора </div>
      <div style={{ paddingBottom: 30 }}>
        <RouterLink to={`map`}>&gt; Душевые</RouterLink>
        <RouterLink to={`map`}>&gt; Лаборатория Гидропоники</RouterLink>
        <RouterLink to={`map`}>&gt; Шлюзы [A]</RouterLink>
        <RouterLink to={`map`}>&gt; Система [A]</RouterLink>
      </div>
      <div style={{ paddingBottom: 30 }}>==========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Control;
