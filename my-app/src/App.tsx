import Main from 'components/main/main';
import Composition from 'components/main/Property/composition';
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
        </Routes>
      </div>
    </>
  );
}

export default App;
