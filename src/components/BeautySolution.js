import React from 'react';

function BeautySolution({ title, services }) {
  return (
    <div className="BeautySolutions">
      <h2>{title}</h2>
      <span></span>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name} <span>{service.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeautySolution;