import React from 'react';
import { useNavigate } from 'react-router-dom';

const Diagnosis = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Диагностика</div>
        <div>===========</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>
          &gt; Проверка системы жизнеобеспечения. . . . . . . . . . . . . . . . . Завершено.
        </div>
        <div>
          &gt; Проверка основных систем. . . . . . . . . . . . . . . . . . . . . . Завершено.
        </div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div style={{ color: 'red' }}>
          ВНИМАНИЕ: Воздушный поток 82.4% Проверьте вентиляционные шахты в жилом отсеке.
        </div>
        <div style={{ color: 'red' }}>ВНИМАНИЕ: Душевая #5 не функционирует.</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>УВЕДОМЛЕНИЕ: Воздушные фильтры заменены 455 дня(дней) назад. </div>
        <div>УВЕДОМЛЕНИЕ: Тех обслуживание шахты проведено 455 дня(дней) назад.</div>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <div style={{ paddingBottom: 30 }}>
        {' '}
        ИТОГ: Системы станции работают в пределах допустимых параметров.
      </div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Diagnosis;
