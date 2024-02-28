import React, { useState } from 'react';
import AccordionBank from './AccordionBank';
import AccordionERP from './AccordionERP';
import Accordion from './Accordion';

const Integrations = () => {
    const [insightData, setInsightData] = useState([
        {
            title: 'Total Working Capital',
            content: 'graph'
        }
    ]);

    const temp = {
        title:'AI Forecasting',
        content: 'graph'
      }
    ;

    
    const addInsightData = (i: { title: string; content: string; }) => {
      setInsightData([...insightData,i]);
    }

  return (
    <div className="container">
        <h1>Ai Dashboard Diagram Builder - INTEGRATIONS</h1>
        <div className="accordion">
            <AccordionBank />
        </div>
        <div className="accordion">
            <AccordionERP />
        </div>
        <div className="accordion">
            {insightData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
        </div>
        <a className="testButton" onClick={() => addInsightData(temp)}>
            Add
        </a>
    </div>
  );
};

export default Integrations;