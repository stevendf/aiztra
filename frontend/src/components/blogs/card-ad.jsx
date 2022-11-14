import React from "react";

export const AdCard = ({ src, title, disponible }) => {
    return (
      <div className="adcard" >
        <img src={src} alt="course image"/>
        <footer>
          <h2>{title}</h2>
          <p>{disponible}</p>
        </footer>
      </div>
    );
  };
  
export const AdFlexbox = (props) => {
    return <div className="adgrid">{props.children}</div>;
  };