import React, { useState } from 'react';
import Batch2024 from '../components/Batch2024';
import Batch2025 from '../components/Batch2025'

function Alumini() {
  const [selected, setSelected] = useState('Batch2024');

  return (
    <div className="main-Alumini-container">
      <h1 className="Alumini-heading">Alumini</h1>

      <div className="Alumini-box">
        <div className="Alumini-box">
          {selected === 'Batch2024' ? <Batch2024 /> : <Batch2025 />}
        </div>
      </div>

      <div className="Alumini-btn">
  <div className="full-width-line"></div>

  <div className="batch-btn-group">
    <button className="btn-2024" onClick={() => setSelected('Batch2024')}></button>
    <p className='p-2024'>2023-2024</p>
  </div>

  <div className="batch-btn-group">
    <button className="btn-2025" onClick={() => setSelected('Batch2025')}></button>
    <p className='p-2025'>2024-2025</p>
  </div>
</div>




  </div>
  );
}

export default Alumini;
