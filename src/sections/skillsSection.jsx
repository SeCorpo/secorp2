import AnimatedSection from '../components/AnimatedSection.jsx';
import { useTranslation } from "react-i18next";
import '../assets/style/skillsSection.css'

const SkillsSection = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <h2>{t("skills_header")}</h2>
            <p className="skills-body">{t("skills_body")}</p>

            <div className="cv-download">
                <h3>Download my CV</h3>
                <div className="cv-buttons">
                    <a className="btn btn-primary" href="/CV2025EN_20sept.pdf" download>
                        CV (English)
                    </a>
                    <a className="btn btn-success" href="/CV2025_20sept.pdf" download>
                        CV (Nederlands)
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default SkillsSection;
