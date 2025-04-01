
import AnimatedSection from '../utils/animatedSection.jsx';

const SkillsSection = () => {
        return (
            <AnimatedSection>
                <h2>Development Skills</h2>

                <h3>Internship Experience</h3>
                <p>During my internship, I gained hands-on experience in both backend and frontend development. I worked
                    extensively on a project API using Python, which initially wasn’t my favorite language—but over
                    time, I’ve come to appreciate its clarity and power.</p>

                <p>In this role, I became proficient with tools and libraries such as:</p>
                <ul>
                    <li>FastAPI</li>
                    <li>Pydantic</li>
                    <li>SQLAlchemy</li>
                    <li>Poetry</li>
                    <li>Pip & virtual environments</li>
                </ul>

                <p>I also worked on the frontend using JavaScript and SCSS, integrating with Nunjucks templates
                    populated with dynamic data from a CMS. Each white-label website had its own CMS project, delivering
                    JSON-formatted content.</p>

                <p>We used Netlify for deployment, automatically running tests and pushing updates via GitHub. This
                    CI/CD pipeline ensured a smooth workflow and high reliability.</p>

                <h3>Fullstack Development</h3>
                <p>In my education and personal projects, I’ve developed fullstack applications using technologies such
                    as:</p>

                <ul>
                    <li><strong>Languages:</strong> Java, JavaScript, Python, C++, Rust</li>
                    <li><strong>Web Development:</strong> HTML, CSS, SCSS, NodeJS, Express, Nunjucks</li>
                    <li><strong>Frameworks:</strong> Spring Boot, Spring MVC, Spring Security, Bootstrap, JavaFX</li>
                    <li><strong>Databases:</strong> MySQL, SQLAlchemy</li>
                    <li><strong>CI/CD & Deployment:</strong> GitHub, Netlify</li>
                    <li><strong>API Development:</strong> RESTful design, FastAPI</li>
                </ul>

                <h3>Agile & Collaboration</h3>
                <p>I have hands-on experience with Agile Scrum, target group analysis, and UI/UX design. These
                    experiences have helped me:</p>
                <ul>
                    <li>Communicate clearly within teams</li>
                    <li>Prioritize tasks effectively</li>
                    <li>Contribute to iterative development</li>
                    <li>Deliver user-centered solutions</li>
                </ul>
            </AnimatedSection>
        );
};

export default SkillsSection;
