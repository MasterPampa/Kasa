import React, { useState } from 'react';
import '../styles/guideline.css';
import aboutData from '../components/data/aboutData';

function Guideline() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleAccordionClick = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  }

  return (
    <div>
      {aboutData.map((lines, index) => (
      <div className="wrapper" key={index}>
        <div className="accordion">
          <h3 className="accordion__title">
            {lines.title}
            <i className={`fa-sm fa-solid fa-chevron-up ${openIndexes.includes(index) ? 'open' : 'close'}`}
            onClick={() => handleAccordionClick(index)}></i>
          </h3>
          <div className={`accordion__text ${openIndexes.includes(index) ? 'show' : 'hide'}`}>
            <p className={`${openIndexes.includes(index) ? 'show' : 'hide'}`}>
              {lines.description}
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Guideline;
