import React, { useState } from 'react';
import'./style.scss';

const Collapse = ({ title, description, imageUrl, link }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className='CollapseCard'>
      <div className='CollapseHeader' onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <img src={imageUrl} className='CardImage' alt="projets web"/>
        <h3 className={`CollapseTitle ${visible ? 'open' : ''}`}>
          {title} <i className={`fa-solid fa-angle-down ${visible ? 'open' : ''}`}></i>
        </h3>
      </div>
      <div className='collapseContent' style={{ display: visible ? 'block' : 'none' }}>
        {description}
        <a href={link} className='CardLink'>
          Lien Ici!
        </a>
      </div>
    </div>
  );
};

export default Collapse;

