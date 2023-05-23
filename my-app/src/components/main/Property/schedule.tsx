import React from 'react';
import { useNavigate } from 'react-router-dom';

const Schedule = ({ nameShip }: { nameShip: string }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>График</div>
        <div>======</div>
      </div>
      <div style={{ paddingBottom: 30 }}>Активность стыковочных станций (последние 6 месяцев):</div>
      <div style={{ paddingBottom: 30 }}>
        <div>2366-06-12.0633 - Станция 2 : Прибытие :: {nameShip}</div>
        <div>2366-04-29.0834 - Станция 1 : Прибытие :: Геркулес</div>
        <div>2366-03-02.1223 - Станция 2 : Отправление :: Ширли</div>
        <div>2366-02-20.1604 - Станция 2 : Прибытие :: Ширли</div>
      </div>
      <div style={{ paddingBottom: 30 }}>========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Schedule;
