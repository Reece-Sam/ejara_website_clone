import React from "react";
import "../../styles/landing-page/header.css"; 
import { Link } from "react-router-dom";
import EjaraForBusiness from "../Ejara-for-business/index";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/">
          <img
            className="header-logo"
            src="images/Ejara-assets/landingPage_images/imgi_1_67f657686c86f47cedc4c5f9_Logo Horizontal.svg"
            alt="Ejara Logo"
          />
        </Link>

        <ul className="menu-items">
          <li className="save-menu-item">
            Save
            <ul className="save-sub-menu-items">
              <li>
                <Link className="sub-menu-item" to="/saving-box">
                  <div>
                    <img
                      src="images/Ejara-assets/landingPage_images/download (2).svg"
                      alt="savings icon"
                    />
                  </div>
                  <div>
                    <h4>Savings Box</h4>
                    <p>Saving for Emergencies</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="sub-menu-item" to="/saving-project">
                  <div>
                    <img
                      src="images/Ejara-assets/landingPage_images/download (1).svg"
                      alt="goal icon"
                    />
                  </div>
                  <div>
                    <h4>Project Savings</h4>
                    <p>Save for your projects</p>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="invest-menu-item">
            Invest
            <ul className="invest-sub-menu-items">
              <li>
                <Link className="sub-menu-item" to="/invest">
                  <div>
                    <img
                      src="images/Ejara-assets/landingPage_images/download.svg"
                      alt="wallet icon"
                    />
                  </div>
                  <div>
                    <h4>Investment</h4>
                    <p>Earn up to 6.5% annual interest</p>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/business">EjaraForBusiness</Link>
          </li>
        </ul>

        <ul>
          <li className="menu-items region">
            <img
              className="globe-icon"
              src="images/Ejara-assets/landingPage_images/download (5).svg"
              alt="Region icon"
            />
            Africa
            <ul className="sub-menu-items">
              <li>
                <a href="#">Africa</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">Americas</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Oceania</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
