import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HeaderSW extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/Listado">
                Lista de personajes
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="navbar-brand" to="/Personaje">
                  Personaje del dia
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
    );
  }
}
