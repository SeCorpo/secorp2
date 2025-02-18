import '../assets/style/header.css';
import {useRef} from "react";

const Header = () => {
    const logoImageRef = useRef(null);
    let spinning = true
    const handleHeaderTitleClick = () => {
        if(spinning) {
            logoImageRef.current.style.animation = 'none';
            return spinning = false;
        }
        logoImageRef.current.style.animation = 'spin infinite 20s linear'
        return spinning = true;
    };

    return (
        <header className="header">
            <a href="https://www.secorp.pro" className="logo-link">
                <img ref={logoImageRef} className="logo-image" src="/android-chrome-192x192.png" alt="SeCorp" />
            </a>
            <h1 className="header-title" onClick={handleHeaderTitleClick}>
                SeCorp
            </h1>
        </header>
    );
}

export default Header;