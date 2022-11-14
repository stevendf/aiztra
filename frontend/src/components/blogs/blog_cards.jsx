import React from "react";

export const inCard = ({ src, title, disponible }) => {
    return (
      <div className="in_card" >
        <img src={src} alt="course image"/>
        <footer>
          <h2>{title}</h2>
          <p>{disponible}</p>
        </footer>
      </div>
    );
  };
  
export const inFlexbox = (props) => {
    return <div className="in_grid">{props.children}</div>;
  };