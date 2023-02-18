import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#000',
  background: '#d4f9fa',
  p: '19px',
};

const Activation = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const handleFocus = () => ref.current?.focus();

  const handleCommand = () => {
    if (value === 'ok') {
      localStorage.setItem('modal', 'true');
      setOpen(true);
    }
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    const key = e.key.toLowerCase();
    switch (key) {
      case 'backspace':
        value.length && setValue(value.slice(0, -1));
        break;

      case 'enter':
        handleCommand();
        break;

      default:
        const re = /[a-z0-9,.<>/?[\]{}'";:*&^%$#@!~]/;
        if (key.length === 1 && key.match(re)) {
          setValue(value + key);
        }
        break;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('modal') === 'true') {
      setOpen(true);
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Активация Системы Самоуничтожения станции</div>
        <div>===============================</div>
      </div>
      <div style={{ color: 'red', paddingBottom: 50 }}>
        ЭТА ФУНКЦИЯ АКТИВИРУЕТ 10-МИНУТНУЮ ПОСЛЕДОВАТЕЛЬНОСТЬ САМОУНИЧТОЖЕНИЯ.
      </div>
      <div style={{ color: 'red', paddingBottom: 50 }}>
        ПОСЛЕ АКТИВАЦИИ ПОСЛЕДОВАТЕЛЬНОСТЬ НЕВОЗМОЖНО ПРЕДОТВРАТИТЬ.
      </div>
      <div
        style={{ color: 'red', paddingBottom: 50 }}
        className="__prompt__  cursor"
        onClick={handleFocus}
      >
        <span className={'prompt'}> ВВЕДИТЕ &apos;OK&apos;, ЧТОБЫ НАЧАТЬ ОБРАТНЫЙ ОТСЧЕТ: </span>
        <span className={'input'} ref={ref}>
          {value}
        </span>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>ИНИЦИИРОВАНА ПОСЛЕДОВАТЕЛЬНОСТЬ САМОУНИЧТОЖЕНИЯ.</p>
          <p>ПОЖАЛУЙСТА, ЭВАКУИРУЙТЕСЬ КАК МОЖНО СКОРЕЕ.</p>
        </Box>
      </Modal>
      <div style={{ paddingBottom: 30 }}>===============</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

export default Activation;
