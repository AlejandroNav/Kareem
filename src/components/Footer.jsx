
import "./Footer.css";

// =========================================
// 1. ENLACES DEL FOOTER
// =========================================

const enlaces = [
    { nombre: "Sobre mí", href: "#sobre-mi" },
    { nombre: "Empresas", href: "#empresas" },
    { nombre: "Servicios", href: "#servicios" },
    { nombre: "Contribución", href: "#contribucion" },
    { nombre: "Contacto", href: "#contacto" }
];

// =========================================
// 2. COMPONENTE FOOTER
// =========================================

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* IDENTIDAD */}

                <div className="footer-top">

                    <div className="footer-brand">
                        <a href="#" className="footer-name">
                            Kareem Amrabat
                        </a>

                        <p>Negocios e inversiones</p>
                    </div>

                    <span className="footer-regions">
                        México · Marruecos
                    </span>

                </div>

                {/* NAVEGACIÓN Y COPYRIGHT */}

                <div className="footer-bottom">

                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Kareem Amrabat.
                        Todos los derechos reservados.
                    </p>

                    <nav
                        className="footer-nav"
                        aria-label="Navegación del pie de página"
                    >
                        {enlaces.map(function (enlace) {
                            return (
                                <a
                                    href={enlace.href}
                                    key={enlace.href}
                                >
                                    {enlace.nombre}
                                </a>
                            );
                        })}
                    </nav>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
