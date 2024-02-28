import React, { useState } from 'react';
import "./ERPIntegration.css";
import { useSelector } from 'react-redux';


const oracle = "https://www.pngmart.com/files/23/Oracle-Logo-PNG-File.png";

const ERPIntegration = () => {

    // const [opacityOracle, setOpacityOracle] = useState(0);
    // const [erpSystems, setErpSystems] = useState([{
    //     name: "Oracle",
    //     logo: "https://www.pngmart.com/files/23/Oracle-Logo-PNG-File.png",
    //     status: "Connected",
    //     id: "3342344342345"
    // }])

    const erpSystems = useSelector<DataState, DataState["erpInfo"]>((state) => state["erpInfo"]);

    // const handleOracle = () => {
    //     setOpacityOracle(opacityOracle + 1);
    // };
  

  return (
    <div className="box" >
        <b className='erpTitle'>Your Active ERP:</b>
        <div className="container">
            {erpSystems.map((erpSystem) => {
                return (
                    <div className='erp'>
                        <img className='erpLogo' key={erpSystem.name} src={erpSystem.logo} alt='logo' />
                        <span className='erpStatus'>{erpSystem.status}</span>
                        <span className='erpId'>{"ERP ID.: " + erpSystem.id}</span>
                    </div>
                )
            })}

            {/* <img src={oracle} alt="Oracle logo" style={{width:"100px"}} onClick={handleOracle} />
            <p><span className='bankName'>Oracle</span> 
            <span className='connected' style={{
            opacity: opacityOracle,
          }}>Connected</span></p>
            <p>
                ERP I.D.: 123469789372
            </p> */}
        </div>

        {/* <div className="bank">
            <img className="image" src={natwest} alt="Natwest Logo" style={{
                opacity: "100%",
                float: "left",
            }}/>
            <div className="bankText">
                <div className='bankName'>
                Natwest
                </div>
                <div className="bankDetails">
                Account No: 93882732
                <br></br>
                Sort code: 00-33-10
                </div>
            </div>
        </div> */}

        {/* <div className="bank">
            <img className="image" src={lloyds} alt="Lloyds Logo" style={{
                opacity: "100%",
                float: "left",
            }}/>
            <div className="bankText">
                <div className='bankName'>
                Lloyds
                </div>
                <div className="bankDetails">
                Account No: 88120034
                <br></br>
                Sort code:
                </div>
            </div>
        </div> */}
      
    </div>
    
  );
};

export default ERPIntegration;