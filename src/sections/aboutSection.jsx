import AnimatedSection from '../components/AnimatedSection.jsx';
import '../assets/style/aboutSection.css';
import { useTranslation } from "react-i18next";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <div className="about-section-container">
                <div className="text-content">
                    <h2>{t("about_header")}</h2>
                    <p style={{ whiteSpace: "pre-line" }}>{t("about_body")}</p>
                </div>
                <div className="image-container">
                    <a href="https://www.linkedin.com/in/sem-koldewijn/" target="_blank" rel="noopener noreferrer">
                        <img
                            loading="lazy"
                            src="/DSC_5690_NEF_shotwell.jpg"
                            alt="Sem Koldewijn"
                            className="profile-picture"
                        />
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
