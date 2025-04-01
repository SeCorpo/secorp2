import AnimatedSection from '../utils/animatedSection.jsx';
import '../assets/style/aboutSection.css';

const AboutSection = () => {
    return (
        <AnimatedSection>
            <div className="about-section-container">
                <div className="text-content">
                    <h2>About Me</h2>
                    <p>Hi! I am <strong>Sem Koldewijn</strong>, a Software Development student at <strong>Hogeschool
                        Utrecht</strong>.</p>

                    <p>I have a strong passion for programming—seeing it as a combination of creativity, structure, and
                        freedom. I’m fascinated by how software continues to evolve and how we, as developers, are
                        constantly learning and adapting within this fast-paced field.</p>

                    <p>Throughout my education and internships, I’ve worked on many fullstack projects using a wide
                        array of tools, libraries, and methodologies. I’ve developed the ability to switch between
                        backend logic and frontend design, always with the user in mind.</p>

                    <p>Some of my projects are available on my GitHub, and I’m always open to feedback or collaboration.</p>

                </div>
                <div className="image-container">
                    <a href="https://www.linkedin.com/in/sem-koldewijn/" target="_blank" rel="noopener noreferrer">
                        <img loading="lazy" src="/DSC_5690_NEF_shotwell.jpg" alt="Sem Koldewijn" className="profile-picture" />
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
