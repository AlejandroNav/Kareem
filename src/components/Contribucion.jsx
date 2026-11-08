
import "./Contribucion.css";

const iniciativas = [
    {
        id: 1,
        pais: "Marruecos",
        titulo: "Fortalecer comunidades.",
        descripcion:
            "Apoyo a iniciativas comunitarias que promueven el bienestar colectivo y generan nuevas oportunidades de desarrollo local.",
        simbolo: "🇲🇦"
    },
    {
        id: 2,
        pais: "México",
        titulo: "Impulsar causas que importan.",
        descripcion:
            "Colaboración con ONG y organizaciones de la sociedad civil comprometidas con el bienestar social y el desarrollo de sus comunidades.",
        simbolo: "🇲🇽"
    }
];

function Contribucion() {
    return (
        <section
            className="contribucion"
            id="contribucion"
        >
            <div className="contribucion-container">
                <div className="contribucion-top">
                    <p className="contribucion-eyebrow">
                        04 / Contribución
                    </p>
                    <span className="contribucion-regions">
                        México y Marruecos
                    </span>
                </div>
                <div className="contribucion-heading">
                    <h2>
                        El verdadero impacto se construye{" "}
                        <em>junto a otros.</em>
                    </h2>
                    <p className="contribucion-intro">
                        Una visión empresarial que reconoce
                        la importancia de devolver valor a las
                        comunidades y de apoyar a quienes
                        trabajan por un futuro mejor.
                    </p>
                </div>
                <div className="contribucion-grid">
                    {iniciativas.map(function (iniciativa) {
                        return (
                            <article
                                className="contribucion-item"
                                key={iniciativa.id}
                            >
                                {/* País y numeración */}
                                <div className="contribucion-item-top">
                                    <span>
                                        {String(iniciativa.id).padStart(2, "0")}
                                        {" / "}
                                        {iniciativa.pais}
                                    </span>
                                </div>
                                {/* Símbolo editorial */}
                                <div
                                    className="contribucion-mark"
                                    aria-hidden="true"
                                >
                                    {iniciativa.simbolo}
                                </div>
                                <h3>
                                    {iniciativa.titulo}
                                </h3>
                                <p>
                                    {iniciativa.descripcion}
                                </p>
                            </article>
                        );
                    })}
                </div>
                <div className="contribucion-bottom">
                    <span>
                        Compromiso más allá de los negocios
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contribucion;
