
import "./About.css";

// Importamos automáticamente los 9 logotipos.
// Vite encuentra las imágenes dentro de esta carpeta.
const logoModules = import.meta.glob(
    "../assets/collaborators/logos/*.png",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

function About() {

    // Creamos una lista ordenada del 1 al 9.
    const collaborators = Array.from(
        { length: 9 },
        function (_, index) {
            const number = index + 1;

            return {
                id: number,
                logo: logoModules[
                    `../assets/collaborators/logos/${number}.png`
                ]
            };
        }
    );

    return (
        <section className="about" id="sobre-mi">

            {/* =====================================
                1. INFORMACIÓN PERSONAL
               ===================================== */}

            <div className="about-content">

                <p className="about-eyebrow">
                    01 / Sobre mí
                </p>

                <h2>Una visión empresarial</h2>

                <p className="about-description">
                    Una trayectoria enfocada en identificar
                    oportunidades, desarrollar proyectos y
                    construir relaciones empresariales duraderas.
                </p>

                <a href="#empresas" className="about-link">
                    Conoce mis empresas
                </a>

            </div>

            {/* =====================================
                2. COLABORADORES
               ===================================== */}

            <div className="about-collaborators">

                <h3 className="about-collaborators-title">
                    Colaboradores
                </h3>

                <div className="about-companies">

                    {collaborators.map(function (company) {
                        return (
                            <div
                                // NUEVO: clase especial únicamente para el logo 5
                                className={
                                    company.id === 5
                                        ? "about-company about-company-dark"
                                        : "about-company"
                                }
                                key={company.id}
                            >
                                <img
                                    src={company.logo}
                                    alt={`Logotipo de colaborador ${company.id}`}
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default About;
