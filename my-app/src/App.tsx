import Main from 'components/main/main';
import Composition from 'components/main/Property/composition';
import Connection from 'components/main/Property/Connection/connection';
import Hercules from 'components/main/Property/Connection/Vessels/hercules';
import YourShip from 'components/main/Property/Connection/Vessels/yourShip';
import Control from 'components/main/Property/Control/control';
import Gateways from 'components/main/Property/Control/SinglePages/gateways';
import HydroponicsLab from 'components/main/Property/Control/SinglePages/hydroponicsLab';
import Showers from 'components/main/Property/Control/SinglePages/showers';
import Activation from 'components/main/Property/Control/System/Options/activation';
import LifeSupport from 'components/main/Property/Control/System/Options/lifeSupport';
import SelfDestruct from 'components/main/Property/Control/System/Options/selfDestruct';
import System from 'components/main/Property/Control/System/system';
import Diagnosis from 'components/main/Property/diagnosis';
import Map from 'components/main/Property/map';
import Schedule from 'components/main/Property/schedule';
import WelcomePage from 'components/WelcomePage/welcomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const nameShip = 'Попап';
  return (
    <div className="welcome__main">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="main" element={<Main />} />
        <Route path="main/map" element={<Map />} />
        <Route path="main/diagnosis" element={<Diagnosis />} />
        <Route path="main/schedule" element={<Schedule nameShip={nameShip} />} />
        <Route path="main/composition" element={<Composition />} />
        <Route path="main/connection" element={<Connection nameShip={nameShip} />} />
        <Route path="main/connection/yourship" element={<YourShip />} />
        <Route path="main/connection/hercules" element={<Hercules />} />
        <Route path="main/control" element={<Control />} />
        <Route path="main/control/showers" element={<Showers />} />
        <Route path="main/control/lab" element={<HydroponicsLab />} />
        <Route path="main/control/gateways" element={<Gateways />} />
        <Route path="main/control/system" element={<System />} />
        <Route path="main/control/system/life" element={<LifeSupport />} />
        <Route path="main/control/system/self-destruct" element={<SelfDestruct />} />
        <Route path="main/control/system/self-destruct/activation" element={<Activation />} />
      </Routes>
    </div>
  );
}

export default App;
