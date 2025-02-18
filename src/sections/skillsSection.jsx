
import AnimatedSection from '../utils/animatedSection.jsx';

const SkillsSection = () => {
        return (
            <AnimatedSection>
                    <h2>Development Skills</h2>
                    <p>During my internship, I have learned new techniques and gained valuable experience. Working on the project API introduced me to Python. Initially, I was not fond of the language, but over time I came to appreciate its charm.</p>
                    <p>Within Python, I have become familiar with SQLAlchemy, Pydantic, FastAPI, Poetry, Pip, and the concept of virtual environments. Additionally, I have worked extensively on the front end of the website, gaining extra experience in JavaScript and SCSS.</p>
                    <p>The project uses Nunjucks templates, which include variables that are populated with content during the build process. Each white-label website has its own CMS project. The content management system uses templates to create variables and delivers the requested variables in JSON format.</p>
                    <p>For deploying the website, we use Netlify, a service connected to the GitHub repository. It automatically runs tests when git pushes occur and deploys the production branch to the hosting service. Essentially, Netlify serves as a hosting manager.</p>

                    <h3>Fullstack Development</h3>
                    <p>During my education, I work in teams on fullstack projects. In these projects, we use Java, JavaScript, CSS, HTML, XML, MySQL, NodeJS, and various frameworks such as Spring Boot, Spring MVC, Spring Security, Express, Bootstrap, and JavaFX. Additionally, I have experimented with C++, Rust, and Python. Some of my projects can be found on GitHub (/secorpo).</p>
                    <p>My experience with Agile Scrum, target group research/analysis, and user interface design has taught me to collaborate effectively in a dynamic environment. I am always actively involved in group discussions and enjoy contributing to the teams success.</p>

                    <h3>Technical Skills</h3>
                    <ul>
                            <li>Programming Languages: Java, JavaScript, Python, C++, Rust</li>
                            <li>Web Development: HTML, CSS, SCSS, NodeJS, Express, Nunjucks</li>
                            <li>Frameworks: Spring Boot, Spring MVC, Spring Security, Bootstrap, JavaFX</li>
                            <li>Database Management: MySQL, SQLAlchemy</li>
                            <li>Deployment and CI/CD: Netlify, GitHub</li>
                            <li>APIs: FastAPI, RESTful API design</li>
                            <li>Tools: Poetry, Pip, Virtual Environments</li>
                    </ul>

                    <h3>Soft Skills</h3>
                    <p>Soft skills are crucial for effective collaboration and leadership. My experience in team projects and Agile environments has equipped me with the following skills:</p>
                    <ul>
                            <li>Communication: Clear and effective verbal and written communication</li>
                            <li>Teamwork: Ability to work collaboratively in diverse teams</li>
                            <li>Problem-Solving: Creative and strategic thinking to overcome challenges</li>
                            <li>Leadership: Guiding and inspiring teams to achieve their best</li>
                            <li>Time Management: Prioritizing tasks and meeting deadlines efficiently</li>
                    </ul>

                    <p>We believe that the combination of these skills allows us to deliver high-quality results and drive innovation. Thank you for taking the time to learn about our capabilities. If you have any questions or would like to discuss how we can help you achieve your goals, please feel free to reach out!</p>
            </AnimatedSection>
        );
};

export default SkillsSection;
