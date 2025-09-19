import AnimatedSection from '../components/AnimatedSection.jsx';
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <h2>{t("skills_header")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{t("skills_body")}</p>
        </AnimatedSection>
    );
};

export default SkillsSection;
