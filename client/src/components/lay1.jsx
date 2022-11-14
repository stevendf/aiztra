import React from 'react';
import { Link } from 'react-router-dom';

const Layout1 = (props) => (
  <div>
      <ul>
        <li><Link to="/">Ingresar</Link></li>
        <li><Link to="/register">Unirme</Link></li>
        <li><Link to="/info">Info</Link></li>
      </ul>
      <div>{props.children}</div>
  </div>
);

export default Layout1;