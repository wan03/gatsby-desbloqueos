import React from 'react';

import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'



export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/celulares">
          Celulares
        </a>

        <a className="menu-item" href="/about">
          About
        </a>

        <a className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  };

// export default SideBar;
