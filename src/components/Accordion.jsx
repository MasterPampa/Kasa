import React, { useState } from 'react';

function Accordion({ description, equipments }) {
  const [isOpen, setIsOpen] = useState(Array(2).fill(false));

  const handleAccordionClick = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <h3 className="accordion__title" onClick={() => handleAccordionClick(0)}>
          Description
          <i className={`fa-sm fa-solid fa-chevron-up ${isOpen[0] ? 'open' : 'close'}`}></i>
        </h3>
        <div className={`accordion__text ${isOpen[0] ? 'show' : 'hide'}`}>
          {description}
        </div>
      </div>
      <div className="accordion">
        <h3 className="accordion__title" onClick={() => handleAccordionClick(1)}>
          Équipements
          <i className={`fa-sm fa-solid fa-chevron-up ${isOpen[1] ? 'open' : 'close'}`}></i>
        </h3>
        <div className={`accordion__text ${isOpen[1] ? 'show' : 'hide'}`}>
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
