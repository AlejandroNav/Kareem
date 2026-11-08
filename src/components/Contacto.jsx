
import "./Contacto.css";

// =========================================
// 1. DATOS DE CONTACTO PROVISIONALES
// =========================================

const contacto = {
    correo: "kareem@amrabat.com",
    whatsapp: "+52 55 0000 0000"
};

// =========================================
// 2. COMPONENTE CONTACTO
// =========================================

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <div className="contacto-container">

                {/* ENCABEZADO */}

                <div className="contacto-heading">
                    <p className="contacto-eyebrow">
                        05 / Contacto
                    </p>

                    <h2>
                        Construyamos algo <em>juntos.</em>
                    </h2>

                    <p className="contacto-description">
                        Las mejores oportunidades comienzan
                        con una conversación. Hablemos de
                        negocios, inversiones y nuevas
                        posibilidades de colaboración.
                    </p>
                </div>

                {/* MEDIOS DE CONTACTO */}

                <div className="contacto-methods">

                    <div className="contacto-method">
                        <span className="contacto-method-label">
                            01 / Correo electrónico
                        </span>

                        <a
                            href={`mailto:${contacto.correo}`}
                            className="contacto-method-link"
                        >
                            {contacto.correo}
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <div className="contacto-method">
                        <span className="contacto-method-label">
                            02 / WhatsApp
                        </span>

                        <span className="contacto-method-link contacto-method-placeholder">
                            {contacto.whatsapp}
                            <span aria-hidden="true">↗</span>
                        </span>
                    </div>

                </div>

                <p className="contacto-note">
                    Información de contacto provisional.
                </p>

            </div>
        </section>
    );
}

export default Contacto;
