/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
const Header = () => {
  const [isActive, setActive] = useState(true);

  const toggleButton = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="title">TDG</div>
      <a href="#" onClick={() => toggleButton()} className="toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={isActive ? "nav-links" : "nav-links active"}>
        <ul>
          <li>
            <a href="/" target="blank">
              Home
            </a>
          </li>
          <li>
            <a href="https://tdg.com.tr/tr/iletisim" target="blank">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
