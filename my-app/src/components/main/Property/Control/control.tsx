import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Control = () => {
  const happyPress: boolean = useKeyPress(']');
  const [pointer, setPointer] = useState('link');
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const checkPress = () => {
    if (!happyPress) {
      return alert('Fuck U');
    }
  };

  useEffect(() => {
    if (happyPress) {
      setPointer('link-active');
    } else {
      setPointer('link');
    }
  }, [happyPress]);

  console.log(happyPress);
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
          {' '}
          <RouterLink className={pointer} to={`map`}>
            &gt; Система [A]
          </RouterLink>
        </button>
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
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}

export default Control;
