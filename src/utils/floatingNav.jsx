import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import DecimalClock from "../assets/DecimalClock.jsx";
import '../assets/style/floatingNav.css';

const FloatingNav = () => {
    return (
        <Draggable>
            <nav className="floating-nav">
                <ul>
                    <li><Link to="/header">Hello!</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="divider"></div>
                <DecimalClock />
            </nav>
        </Draggable>
    );
};

export default FloatingNav;
