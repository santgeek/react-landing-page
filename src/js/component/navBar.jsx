import React from "react";

export let NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <div className="container-fluid">
            <a className="navbar-brand ms-5">Start Bootstrap</a>
            <button className="navbar-toggler ms-4 me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-4">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}