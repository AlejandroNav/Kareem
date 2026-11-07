import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Empresas from "./components/Empresas";

import "./App.css";
import Servicios from "./components/Servicios";

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Empresas />
                <Servicios />
            </main>
        </>
    );
}

export default App;