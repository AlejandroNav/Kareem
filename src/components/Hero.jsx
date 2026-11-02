import heroImage from "../assets/cdmx.avif";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-eyebrow">
                    Business & Investments
                </p>

                <h1>Kareem Amrabat</h1>

                <p className="hero-description">
                    Building opportunities through
                    strategic vision and investment.
                </p>
            </div>

            <div className="hero-image">
                <img
                    src={heroImage}
                    alt="Arquitectura contemporánea"
                />
            </div>
        </section>
    );
}

export default Hero;