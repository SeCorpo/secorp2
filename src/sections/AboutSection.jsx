import AnimatedSection from '../AnimatedSection';
import '../assets/style/AboutSection.css';

const AboutSection = () => {
    return (
        <AnimatedSection>
            <div className="about-section-container">
                <div className="text-content">
                    <h2>About Me</h2>
                    <p>Hello! My name is Sem Koldewijn, and I am currently pursuing an Associate Degree in Software Development at Hogeschool Utrecht. From February, I am looking for an internship opportunity to further my education and gain practical experience in the field of software development.</p>
                    <p>Throughout my studies, I have worked in teams on fullstack projects, utilizing a variety of technologies and frameworks. These include Java, JavaScript, CSS, HTML, XML, MySQL, NodeJS, and frameworks such as Spring Boot, Spring MVC, Spring Security, Express, Bootstrap, and JavaFX. Additionally, I have experimented with C++, Rust, and Python. Some of my projects can be found on my GitHub profile (/secorpo).</p>
                    <p>My experience with Agile Scrum, target group research/analysis, and user interface design has taught me how to collaborate effectively in dynamic environments. I am always actively involved in group discussions and enjoy contributing to the success of the team.</p>
                    <p>Programming for me is a blend of technology, creativity, and freedom. It is a field where continuous learning is essential as new software is constantly being developed, and the community is vast and supportive.</p>
                    <p>I am confident that with my knowledge and experience, I can make a valuable contribution to your team. I am eager to learn and grow, and I am convinced that I can positively impact your company.</p>
                    <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to your team.</p>
                    <p>Sincerely,</p>
                    <p>Sem Koldewijn</p>
                </div>
                <div className="image-container">
                    <a href="https://www.linkedin.com/in/sem-koldewijn/" target="_blank" rel="noopener noreferrer">
                        <img src="/DSC_5690_NEF_shotwell.jpg" alt="Sem Koldewijn" className="profile-picture" />
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
