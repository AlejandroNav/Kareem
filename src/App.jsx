import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Empresas from "./components/Empresas";

import "./App.css";
import Servicios from "./components/Servicios";
import Contribucion from "./components/Contribucion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Empresas />
                <Servicios />
                <Contribucion />
                <Contacto />
            </main>

            <Footer />
        </>
    );
}

export default App;