import AnimatedSection from '../utils/animatedSection.jsx';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <h2>{t("contact_header")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{t("contact_body")}</p>
        </AnimatedSection>
    );
};

export default ContactSection;
