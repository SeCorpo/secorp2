import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import HelloSection from './sections/helloSection.jsx';
import SkillsSection from "./sections/skillsSection.jsx";
import AboutSection from './sections/aboutSection.jsx';
import ContactSection from './sections/contactSection.jsx';
import Header from "./sections/header.jsx";
import Footer from "./sections/footer.jsx";
import './assets/style/app.css';
import './assets/style/floatingNav.css';
import ScrollToElement from "./components/ScrollToElement.jsx";
import FloatingNav from "./components/FloatingNav.jsx";


function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToElement />
                <FloatingNav />
                <div className="sections">
                    <Header name="header" id="header"/>
                    <Element name="hello" id="hello" className="element">
                        <HelloSection />
                    </Element>
                    <Element name="skills" id="skills" className="element">
                        <SkillsSection />
                    </Element>
                    <Element name="about" id="about" className="element">
                        <AboutSection />
                    </Element>
                    <Element name="contact" id="contact" className="element">
                        <ContactSection />
                    </Element>
                    <Element name="footer" id="footer" className="element">
                        <Footer />
                    </Element>
                </div>
            </div>
        </Router>
    );
}

export default App;
