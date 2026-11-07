
import "./Empresas.css";

// =========================================
// 1. INFORMACIÓN TEMPORAL DE LAS EMPRESAS
// =========================================

const empresas = [
    {
        id: 1,
        nombre: "Atlas Motors Trading",
        sector: "Comercio automotriz",
        ubicacion: "México / Marruecos",
        descripcion:
            "Importación y comercialización de vehículos, conectando oportunidades del sector automotriz entre México y Marruecos.",
        simbolo: "AM"
    },
    {
        id: 2,
        nombre: "Maghreb Cereal Trading",
        sector: "Comercio agroindustrial",
        ubicacion: "México / Marruecos",
        descripcion:
            "Intercambio internacional de cereales y productos agrícolas, facilitando nuevas conexiones comerciales entre ambos mercados.",
        simbolo: "MC"
    },
    {
        id: 3,
        nombre: "Nativa Desarrollos",
        sector: "Construcción residencial",
        ubicacion: "México",
        descripcion:
            "Desarrollo y construcción de proyectos habitacionales que integran diseño, funcionalidad y una visión de crecimiento urbano.",
        simbolo: "ND"
    },
    {
        id: 4,
        nombre: "Atlas Mineral Resources",
        sector: "Minería",
        ubicacion: "Marruecos",
        descripcion:
            "Exploración y desarrollo de oportunidades en el sector minero marroquí, con enfoque en recursos minerales e inversión estratégica.",
        simbolo: "AR"
    }
];

// =========================================
// 2. COMPONENTE EMPRESAS
// =========================================

function Empresas() {
    return (
        <section className="empresas" id="empresas">
            <div className="empresas-container">
                {/* ENCABEZADO */}
                <div className="empresas-heading">
                    <p className="empresas-eyebrow">
                        02 / Empresas
                    </p>
                    <h2>
                        Negocios que conectan mercados.
                    </h2>
                    <p className="empresas-intro">
                        Una visión empresarial que conecta
                        México y Marruecos a través del comercio
                        internacional, el desarrollo inmobiliario
                        y los recursos estratégicos.
                    </p>
                </div>
                {/* GRID DE EMPRESAS */}
                <div className="empresas-grid">
                    {empresas.map(function (empresa) {
                        return (
                            <article
                                className="empresa-card"
                                key={empresa.id}
                            >
                                <div className="empresa-card-top">
                                    <span className="empresa-number">
                                        {String(empresa.id).padStart(2, "0")}
                                    </span>
                                    <span className="empresa-location">
                                        {empresa.ubicacion}
                                    </span>
                                </div>
                                <div className="empresa-symbol">
                                    {empresa.simbolo}
                                </div>
                                <div className="empresa-card-content">
                                    <p className="empresa-sector">
                                        {empresa.sector}
                                    </p>
                                    <h3>{empresa.nombre}</h3>
                                    <p className="empresa-description">
                                        {empresa.descripcion}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Empresas;
