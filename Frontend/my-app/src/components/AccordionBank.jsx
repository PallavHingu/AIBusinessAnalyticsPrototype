import React, { useState } from 'react';
const natwest = 'https://ervas.org.uk/wp-content/uploads/2019/04/Natwest-logo.png';
const nationwide = "https://logos-world.net/wp-content/uploads/2021/04/Nationwide-Emblem.png";
const lloyds = "https://dalemaintenance.com/wp-content/uploads/2021/06/logo-lloyds.jpg";

const AccordionBank = () => {
  const [isActive, setIsActive] = useState(false);
  const [opacityNatwest, setOpacityNatwest] = useState(0);
  const [opacityNationwide, setOpacityNationwide] = useState(0);
  const [opacityLloyds, setOpacityLloyds] = useState(0);

  const handleNatwest = () => {
    setOpacityNatwest(opacityNatwest + 0.5);
  };

  const handleNationwide = () => {
    setOpacityNationwide(opacityNationwide + 0.5);
  };

  const handleLloyds = () => {
    setOpacityLloyds(opacityLloyds + 0.5);
  };

  

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        
        <div>{"Your Linked Bank Accounts"}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>

      {isActive && <div className="accordion-content">
        <img className="image" src={natwest} alt="Natwest Logo" style={{
            opacity: opacityNatwest,
          }}/>
        
        <img className="image" src={nationwide} alt="Nationwide Logo" style={{
            opacity: opacityNationwide,
          }}/>
        
        <img className="image" src={lloyds} alt="Lloyd's Logo" style={{
            opacity: opacityLloyds,
          }}/>
        
      </div>}

      <a className="testButton2" onClick={handleNatwest}>
              Link Natwest 
      </a>

      <a className="testButton2" onClick={handleNationwide}>
              Link Nationwide 
      </a>

      <a className="testButton2" onClick={handleLloyds}>
              Link Lloyds 
      </a>
      
    </div>
    
  );
};

export default AccordionBank;