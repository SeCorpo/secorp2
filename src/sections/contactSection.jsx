import AnimatedSection from '../components/AnimatedSection.jsx';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <h2>{t("contact_header")}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{t("contact_body")}</p>

            <p>
                Email:{" "}
                <a href="mailto:sem@secorp.pro">sem@secorp.pro</a><br />
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/sem-koldewijn" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sem-koldewijn
                </a><br />
                GitHub:{" "}
                <a href="https://github.com/secorpo" target="_blank" rel="noopener noreferrer">
                    github.com/secorpo
                </a>
            </p>
        </AnimatedSection>
    );
};

export default ContactSection;
