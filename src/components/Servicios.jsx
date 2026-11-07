
import "./Servicios.css";

// =========================================
// 1. SERVICIOS PROVISIONALES
// =========================================

const servicios = [
    {
        id: 1,
        nombre: "Comercio internacional",
        descripcion:
            "Conexiones comerciales y operaciones de importación entre México y Marruecos.",
        simbolo: "↗"
    },
    {
        id: 2,
        nombre: "Desarrollo inmobiliario",
        descripcion:
            "Planeación y desarrollo de proyectos residenciales en México.",
        simbolo: "⌂"
    },
    {
        id: 3,
        nombre: "Inversión estratégica",
        descripcion:
            "Identificación y evaluación de oportunidades de negocio en distintos sectores.",
        simbolo: "◇"
    },
    {
        id: 4,
        nombre: "Alianzas empresariales",
        descripcion:
            "Relaciones de colaboración entre empresas, inversionistas y socios internacionales.",
        simbolo: "↔"
    }
];

// =========================================
// 2. COMPONENTE SERVICIOS
// =========================================

function Servicios() {
    return (
        <section className="servicios" id="servicios">

            <div className="servicios-container">

                {/* ENCABEZADO */}

                <div className="servicios-heading">

                    <p className="servicios-eyebrow">
                        03 / Servicios
                    </p>

                    <h2>
                        De la oportunidad a la acción.
                    </h2>

                    <p className="servicios-intro">
                        Conectamos mercados, desarrollamos
                        proyectos y construimos relaciones
                        comerciales con una visión internacional.
                    </p>

                </div>

                {/* LISTADO DE SERVICIOS */}

                <div className="servicios-list">

                    {servicios.map(function (servicio) {
                        return (
                            <article
                                className="servicio-item"
                                key={servicio.id}
                            >
                                <span className="servicio-number">
                                    {String(servicio.id).padStart(2, "0")}
                                </span>

                                <div className="servicio-content">
                                    <h3>{servicio.nombre}</h3>
                                    <p>{servicio.descripcion}</p>
                                </div>

                                <span
                                    className="servicio-symbol"
                                    aria-hidden="true"
                                >
                                    {servicio.simbolo}
                                </span>
                            </article>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Servicios;
