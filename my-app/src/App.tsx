import Main from 'components/main/main';
import Composition from 'components/main/Property/composition';
import Connection from 'components/main/Property/Connection/connection';
import Hercules from 'components/main/Property/Connection/Vessels/hercules';
import YourShip from 'components/main/Property/Connection/Vessels/yourShip';
import Control from 'components/main/Property/Control/control';
import Diagnosis from 'components/main/Property/diagnosis';
import Map from 'components/main/Property/map';
import Schedule from 'components/main/Property/schedule';
import WelcomPage from 'components/welcomPage/welcomPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="welcome__main">
        <Routes>
          <Route path="/" element={<WelcomPage />} />
          <Route path="main" element={<Main />} />
          <Route path="main/map" element={<Map />} />
          <Route path="main/diagnosis" element={<Diagnosis />} />
          <Route path="main/schedule" element={<Schedule />} />
          <Route path="main/composition" element={<Composition />} />
          <Route path="main/connection" element={<Connection />} />
          <Route path="main/connection/yourship" element={<YourShip />} />
          <Route path="main/connection/hercules" element={<Hercules />} />
          <Route path="main/control" element={<Control />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
