import Link from "next/link";
import Dropdown from "./DropDown/Dropdown";

export default function Navbar(props) {
  const { ordersNumber, logoutHandler, themeMode, themeModeHandler } = props;

  return (
    <div className="navbar">
      <div className="left-side">
        <img
          src="/logo/logo-light.svg"
          alt="yummy menu"
          className="company-logo"
        />
      </div>
      <div className="right-side d-flex align-items-center">
        <Link href="/order">
          <a className="shopping-card p-relative">
            <img src="/design-utils/shop-card.svg" alt="orders basket" />
            {ordersNumber ? (
              <div className="orders-number p-absolute d-flex justify-content-center align-items-center">
                <span className="text-weight-bold text-color-light">
                  {ordersNumber}
                </span>
              </div>
            ) : null}
          </a>
        </Link>
        <Dropdown logoutHandler={logoutHandler} />
      </div>
    </div>
  );
}