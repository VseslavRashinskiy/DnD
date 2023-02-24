import React from 'react';
import { useNavigate } from 'react-router-dom';

const Composition = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Состав</div>
        <div>======</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>01. Верховен, Соня :: Администратор</div>
        <div>02. Синг, Ашраф :: Дробильщик</div>
        <div>03. Деберс, Дана :: Администратор</div>
        <div>04. Чатцкел, Джером :: Администратор</div>
        <div>05. Тобин, Роза :: Администратор</div>
        <div>06. Радимир, Майкл :: Администратор</div>
        <div>07. Кантаро, Кенджи :: Администратор</div>
        <div>08. Боу, Морган :: Администратор</div>
        <div>09. Нектариус, Рай :: Администратор</div>
        <div>10. n/a</div>
      </div>
      <div style={{ paddingBottom: 30 }}>========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Composition;
