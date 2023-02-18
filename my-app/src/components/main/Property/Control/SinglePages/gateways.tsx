import React, { useState } from 'react';
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

const Gateways = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [turn, setTurn] = useState(localStorage.getItem('Gateway') || 'Закрыт');
  const turnSwitch = () => {
    if (turn === 'Закрыт') {
      localStorage.setItem('Gateway', 'Открыт');
      setTurn('Открыт');
    } else {
      setTurn('Закрыт');
      localStorage.setItem('Gateway', 'Закрыт');
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <div>Шлюзы</div>
        <div>=====</div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <button onClick={handleOpen}>&gt; Стыковочный Отсек_01 :: ШЛЮЗ Закрыт.</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>ОШИБКА! Действует отмена блокировки.</p>
            <p>Невозможно разблокировать дистанционно. Требуется ручное вмешательство.</p>
          </Box>
        </Modal>
        <button onClick={turnSwitch}>&gt; Стыковочный Отсек_02 :: ШЛЮЗ {turn}.</button>
      </div>
      <div style={{ paddingBottom: 30 }}>===========</div>
      <button onClick={goBack}>&gt; Назад</button>
    </div>
  );
};
export default Gateways;
