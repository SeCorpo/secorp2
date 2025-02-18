import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';
import Draggable from 'react-draggable';
import HelloSection from './sections/HelloSection.jsx';
import SkillsSection from "./sections/SkillsSection.jsx";
import AboutSection from './sections/AboutSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import DecimalClock from "./assets/DecimalClock.jsx";
import './App.css';
import './assets/style/FloatingNav.css';

function ScrollToElement() {
    const location = useLocation();

    React.useEffect(() => {
        const sectionId = location.pathname.replace('/', '');
        if (sectionId) {
            scroller.scrollTo(sectionId, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToElement />
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
                <Draggable>
                <nav className="floating-nav">
                    <ul>
                        <li><Link to="/header">Hello!</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="divider"></div>
                    <DecimalClock/>
                </nav>
                </Draggable>
            </div>
        </Router>
    );
}

export default App;
