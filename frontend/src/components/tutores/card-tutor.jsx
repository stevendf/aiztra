import React from "react";

export const Card1 = ({ src, title, disponible }) => {
    return (
      <div className="tutor_card" >
        <img src={src} alt="course image"/>
        <footer>
          <h2>{title}</h2>
          <p>{disponible}</p>
        </footer>
      </div>
    );
  };
  
export const Flexbox1 = (props) => {
    return <div className="tutor_grid">{props.children}</div>;
  };