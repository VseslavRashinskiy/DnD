import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const WelcomPage = () => {
  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>YPSILON 14</div>
        <div>==========</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <div>
          Добро пожаловать на астероидную шахтёрскую станцию YPSILON 14, собственность ISHIYAMA
          DYNAMICS (c), где инновации превыше всего (tm).
        </div>
        <div>==========</div>
      </div>
      <div>
        <RouterLink to={`main`}>
          &gt; Принять пользовательское соглашение и авторизироваться.
        </RouterLink>
      </div>
    </div>
  );
};

export default WelcomPage;
