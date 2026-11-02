import { useState } from "react";
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(function (previousState) {
            return !previousState;
        });
    }
function closeMenu() {
    setIsMenuOpen(false);
}
    return (
        <header className="site-header">
            <div className="header-brand">
                <span className="brand-logo">KA</span>
                <span className="brand-name">Kareem Amrabat</span>
            </div>
            <nav
                id="main-navigation"
                className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}
            >
                <ul>
<li><a href="#companies" onClick={closeMenu}>Empresas</a></li>
<li><a href="#services" onClick={closeMenu}>Servicios</a></li>
<li><a href="#contribution" onClick={closeMenu}>Contribución</a></li>
<li><a href="#partners" onClick={closeMenu}>Socios</a></li>
<li><a href="#clients" onClick={closeMenu}>Clientes</a></li>
<li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>
            </nav>
            <div className="header-languages">
                <button type="button">FR</button>
                <span aria-hidden="true">/</span>
                <button type="button">ES</button>
            </div>
            <button
                className="menu-toggle"
                type="button"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {isMenuOpen ? "×" : "☰"}
            </button>
        </header>
    );
}

export default Header;