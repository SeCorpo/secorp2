import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DecimalClock from "./DecimalClock.jsx";
import "../assets/style/floatingNav.css";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const FloatingNav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <>
                    {/* Floating button + flags */}
                    <div className="floating-controls">
                        <LanguageSwitcher />
                        <button
                            className="floating-toggle"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            {isOpen ? "×" : "☰"}
                        </button>
                    </div>

                    {/* Slide-up mobile menu */}
                    {isOpen && (
                        <nav className="mobile-nav">
                            <ul>
                                <li><Link to="/header" onClick={() => setIsOpen(false)}>Hello!</Link></li>
                                <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
                                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                            </ul>
                            <div className="divider"></div>
                            <DecimalClock />
                        </nav>
                    )}
                </>
            ) : (
                // Desktop floating nav
                <nav className="floating-nav">
                    <ul>
                        <li><Link to="/header">Hello!</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="divider"></div>
                    <DecimalClock />
                    <LanguageSwitcher />
                </nav>
            )}

        </>
    );
};

export default FloatingNav;
