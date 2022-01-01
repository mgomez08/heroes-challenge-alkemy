import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { logout } = useContext(AuthContext);
  return (
    <header className="navbar navbar-expand-sm navbar-dark bg-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Heroes App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-label="Toggle navigation"
          aria-expanded="false"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-menu ${
            isOpenMenu ? "show" : ""
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              end
              to="/"
            >
              Team
            </NavLink>
            <button className="btn btn-outline-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
