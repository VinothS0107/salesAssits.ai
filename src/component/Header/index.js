import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import "./index.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-title-icon-container">
        <h1 className="title">TANN TRIM</h1>
        <div className="header-icon-container">
          <div className="icon-frame">
            <IoIosSearch className="icon" />
          </div>
          <div className="icon-frame">
            <FaRegUser className="icon " />
          </div>
          <div className="icon-frame">
            <IoBookmarkOutline className="icon " />
          </div>
          <div className="icon-frame">
            <AiOutlineShopping className="icon" />
          </div>
        </div>
      </div>
      <div className="header-menu-items-container">
        <ul className="menu-items-list-container">
          <li>Bags </li>
          <li>Travel </li>
          <li>Accesories </li>
          <li>Gifting </li>
          <li>Jewelery </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
