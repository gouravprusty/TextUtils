import { useState } from "react";
import Button from "./Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export default function Navbar({title}) {

    const [themeContent, setThemeContent] = useState("moon");

    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        htmlElement.setAttribute("data-bs-theme", newTheme);
        setThemeContent(themeContent === "moon" ? "sun" : "moon");
    };

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container-fluid">
                <p className="navbar-brand fs-3 my-0" to="/">{title}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <Button content={<i className={`bi bi-${themeContent}-fill`}></i>} classNames="btn py-0 fs-5" clickFunction={toggleTheme} />
                </div>
            </div>
        </nav>
    )
};