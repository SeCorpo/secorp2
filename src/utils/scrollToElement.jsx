import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToElement = () => {
    const location = useLocation();

    useEffect(() => {
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
};

export default ScrollToElement;
