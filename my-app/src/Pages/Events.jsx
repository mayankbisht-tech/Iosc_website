import React, { useState } from 'react';
import VesperaContent from '../components/Vespera';
import AzinktetContent from '../components/Azinktet';

function Events() {
  const [selected, setSelected] = useState('vespera');

  return (
    <div className="main-container">
      <h1 className="heading">Events</h1>

      <div className="center-box">
        <div className="content-box">
          {selected === 'vespera' ? <VesperaContent /> : <AzinktetContent />}
        </div>
      </div>

      <div className="sidebar">
        <button className="sidebar-btn" onClick={() => setSelected('vespera')}>Vespera</button>
        <button className="sidebar-btn" onClick={() => setSelected('azinktet')}>Azinktet</button>
      </div>
    </div>
  );
}

export default Events;
