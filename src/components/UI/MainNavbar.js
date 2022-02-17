import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Assests/images/logo1.png';

function MainNavbar() {
  return (
    <div>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation ">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src={logo}
              width="auto"
              height="110"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Modules</a>

              <div className="navbar-dropdown">
                <div className="nested navbar-item dropdown">
                  <div className="dropdown-trigger">
                    <button
                      className="button"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>Project Kickstart</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="./STD" className="dropdown-item">
                        Sales To Delivery
                      </a>
                      <a href="./Management" className="dropdown-item">Management Compliance</a>
                    </div>
                  </div>
                </div>
                <div className="navbar-dropdown">
                  <div className="nested navbar-item dropdown">
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span>Design</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="./PM" className="dropdown-item">
                          Architect Compliance
                        </a>
                        <a href="./QA" className="dropdown-item">
                          QA Design Compliance
                        </a>

                      </div>
                    </div>
                  </div>


                  <div className="navbar-dropdown">
                    <div className="nested navbar-item dropdown">
                      <div className="dropdown-trigger">
                        <button
                          className="button"
                          aria-haspopup="true"
                          aria-controls="dropdown-menu"
                        >
                          <span>Agile</span>
                          <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <Link to="pm" className="dropdown-item">
                            PM Compliance
                          </Link>
                          <Link to="qa" className="dropdown-item">
                            QA Compliance
                          </Link>
                          <a href="./BA" className="dropdown-item">
                            BA Compliance
                          </a>
                          <a href="./Lead" className="dropdown-item">
                            Lead Compliance
                          </a>
                        </div>
                      </div>
                    </div>


                    <div className="navbar-dropdown">
                      <div className="nested navbar-item dropdown">
                        <div className="dropdown-trigger">
                          <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                          >
                            <span>Closure</span>
                            <span className="icon is-small">
                              <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                          </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              Project Closure Compliance
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Dashboard</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Project Health
                </a>
                <a className="navbar-item">
                  Project Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
