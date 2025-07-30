import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/websites-apps">Web Design</NavLink>
            </li>
            <li>
              <NavLink to="/graphic-design">Graphic Design</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
