import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Главное меню</div>
        <div>============</div>
      </div>
      <div>
        <RouterLink to={`map`}>&gt; Карта станции</RouterLink>
        <RouterLink to={`diagnosis`}>&gt; Диагностика</RouterLink>
        <RouterLink to={`schedule`}>&gt; График</RouterLink>
        <RouterLink to={`composition`}>&gt; Состав</RouterLink>
        <RouterLink to={`main`}>&gt; Связь</RouterLink>
        <RouterLink to={`main`}>&gt; Управление</RouterLink>
      </div>
    </div>
  );
};

export default Main;
