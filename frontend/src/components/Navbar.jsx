import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/user/patient/logout`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    } finally {
      setLogoutLoading(false);
    }
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"} role="navigation" aria-label="Main">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links" id="primary-navigation">
            <Link to={"/"} onClick={() => setShow(!show)} aria-label="Home">
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)} aria-label="Appointment">
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)} aria-label="About Us">
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout} disabled={logoutLoading} aria-busy={logoutLoading} aria-label="Logout">
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin} aria-label="Login">
              LOGIN
            </button>
          )}
        </div>
        <button
          className="hamburger"
          onClick={() => setShow(!show)}
          aria-label="Toggle navigation"
          aria-expanded={show}
          aria-controls="primary-navigation"
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
