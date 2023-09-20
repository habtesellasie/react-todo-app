import React from "react";

const Header = ({ children }) => {
  return (
    <nav>
      <div>
        <h1>To do Projects</h1>
      </div>
      {children}
    </nav>
  );
};

export default Header;
