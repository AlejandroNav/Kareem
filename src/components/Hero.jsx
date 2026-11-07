import heroImage from "../assets/cdmx.avif";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-eyebrow">
                    Negocios e inversiones
                </p>

                <h1>Kareem Amrabat</h1>

                <p className="hero-description">
                    Construyendo oportunidades a través
                    de una visión estratégica y de inversión.
                </p>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Arquitectura contemporánea" />
            </div>
        </section>
    );
}

export default Hero;