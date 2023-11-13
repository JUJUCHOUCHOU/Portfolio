import React, { useState } from "react";
import "./style.scss";

const Collapse = ({ title, description, imageUrl, link }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="CollapseCard">
      <div
        className="CollapseHeader"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <img src={imageUrl} className="CardImage" />
        <h3 className={`CollapseTitle ${visible ? "open" : ""}`}>
          {title}{" "}
          <i
            className={`fa-solid fa-angle-down ${visible ? "open" : ""}`}
            style={{ color: "#36512a" }}
          ></i>
        </h3>
      </div>
      <div
        className="collapseContent"
        style={{ display: visible ? "block" : "none" }}
      >
        {description}
        <div className="githubLink">
        <a href={link} className="CardLink"target="_blank"rel="noreferrer">
          Lien Ici!
        </a>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
