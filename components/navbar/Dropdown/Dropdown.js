import Link from "next/link";
import { useState } from "react";

const DropdownLink = ({ icon, text, bgShape, targetLink }) => {
  return (
    <div className="dropdown-item d-inline-block">
      <Link href={targetLink}>
        <a className="d-flex align-items-center">
          <img
            src={bgShape}
            alt="item background"
            className="item-bg-shape p-absolute from-right"
          />
          <img src={icon} alt="user" className="item-icon" />
          <div className="item-text text-cap">{text}</div>
        </a>
      </Link>
    </div>
  );
};

export default function Dropdown({ logoutHandler }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownStatus = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div className="navbar-dropdown-menu p-relative">
      <button
        onClick={() => handleDropdownStatus()}
        className={`dropdown-button p-relative d-flex justify-content-center align-items-center${
          dropdownIsOpen ? " active" : ""
        }`}
      >
        <div className="bar"></div>
        <div className="bar middle"></div>
        <div className="bar"></div>
      </button>
      <div
        className={`dropdown-items-container text-right${
          dropdownIsOpen ? " show" : ""
        }`}
      >
        <DropdownLink
          icon={"/design-utils/user.svg"}
          text={"your profile"}
          bgShape={"/design-utils/navbar-dp-shape-1.png"}
          targetLink={"/profile"}
        />

        <div className="dropdown-item d-inline-block">
          <div
            className="d-flex align-items-center"
            onClick={() => logoutHandler()}
          >
            <img
              src="/design-utils/navbar-dp-shape-2.png"
              alt="item background"
              className="item-bg-shape p-absolute from-right"
            />
            <img
              src="/design-utils/log-out.svg"
              alt="user"
              className="item-icon"
            />
            <div className="item-text text-cap">log out</div>
          </div>
        </div>

        <div className="dropdown-item d-inline-block">
          <div className="d-flex align-items-center">
            <img
              src="/design-utils/navbar-dp-shape-3.png"
              alt="item background"
              className="item-bg-shape w-100 h-100 p-absolute from-right"
            />
            <div className="item-text text-cap">theme mode</div>
            <div className="mode-toggler d-flex align-items-center justify-content-center text-cap">
              <div className="mode-icon"></div>
              {/* <div className="mode-title">light</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}