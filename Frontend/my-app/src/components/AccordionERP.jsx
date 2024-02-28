import React, { useState } from 'react';

const oracle = "https://www.pngmart.com/files/23/Oracle-Logo-PNG-File.png";

const AccordionERP = () => {
  const [isActive, setIsActive] = useState(false);
  const [opacityOracle, setOpacityOracle] = useState(0);

  const handleOracle = () => {
    setOpacityOracle(opacityOracle + 0.5);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        
        <div>{"Your Linked ERP System"}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      
      {isActive && <div className="accordion-content">
        <img className="image" src={oracle} alt="Oracle Logo" style={{
            opacity: opacityOracle,
          }}/>
      </div>}

      <a className="testButton2" onClick={handleOracle}>
              Link Oracle
      </a>

    </div>
  );
};

export default AccordionERP;