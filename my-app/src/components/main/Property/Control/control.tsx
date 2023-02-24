import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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

const Control = () => {
  const PressEng: boolean = useKeyPress(']');
  const PressRu: boolean = useKeyPress('ъ');
  const [pointer, setPointer] = useState('link');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const checkPress = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (PressEng || PressRu) {
      setPointer('link-active');
    } else {
      setPointer('link');
    }
  }, [PressEng, PressRu]);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Управление</div>
        <div>==========</div>
      </div>
      <div style={{ paddingBottom: 30 }}> [A] :: Требуется доступ администратора </div>
      <div style={{ paddingBottom: 30 }}>
        <RouterLink to={`showers`}>&gt; Душевые</RouterLink>
        <RouterLink to={`lab`}>&gt; Лаборатория Гидропоники</RouterLink>
        <button onClick={checkPress}>
          <RouterLink className={pointer} to={`gateways`}>
            &gt; Шлюзы [A]
          </RouterLink>
        </button>
        <button onClick={checkPress}>
          <RouterLink className={pointer} to={`system`}>
            &gt; Система [A]
          </RouterLink>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>Ошибка! Требуется доступ администратора.</p>
          </Box>
        </Modal>
      </div>
      <div style={{ paddingBottom: 30 }}>==========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};

function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: string }): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: string }): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
}

export default Control;
