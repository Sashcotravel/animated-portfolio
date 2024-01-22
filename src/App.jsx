import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import ServicesMobile from "./components/services/servise-mobile/Services.jsx";


const App = () => {

    return (
        <div>
            <Cursor/>
            <section id="Homepage">
                <Navbar/>
                <Hero/>
            </section>
            <section id="Services"><Parallax type='services'/></section>
            <section id="">
                {
                    window.innerWidth < 700 ? <ServicesMobile/> : <Services/>
                }
            </section>
            <section id="Portfolio"><Parallax type='portfolio'/></section>
            <Portfolio/>
            <section id="Contact"><Contact/></section>
        </div>
    )
};

export default App;
