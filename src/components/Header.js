import { useState } from "react";
import "../styles/header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Circle from "./Circle";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [isMobile, setisMobile] = useState(false);
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__nav-left">
          <h4 className="header__logo">HOMEJAM</h4>
        </div>
        <div className="header__nav-right">
          <ul>
            <li className="header__search">
              <SearchOutlinedIcon /> <span>Search</span>
            </li>
            <li className="header__help">Help</li>
            <li className="header__help">Account</li>
            <li>
              <LocalMallOutlinedIcon />
            </li>
            <li className="header__menu">
              <MenuIcon onClick={() => setisMobile(!isMobile)} />
            </li>

            {isMobile && (
              <div className="header__menu--small">
                <span>Help</span>
                <span>Account</span>
              </div>
            )}
          </ul>
        </div>
      </nav>

      <div className="header__content">
        <div className="header__text">
          <h1 className="header__title">Cari Cari</h1>
          <p className="header__description">
            Live from thier sofa to your yours.Get closer to your favorite
            artists, and never miss out.
          </p>
        </div>

        <div className="header__circles">
          <Circle overlay />
          {[1, 2, 3].map((val, i) => (
            <Circle key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
