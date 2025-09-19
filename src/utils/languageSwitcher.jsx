import { useTranslation } from "react-i18next";
import "../assets/style/languageSwitcher.css";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    };

    return (
        <div className="language-switcher">
            <button
                className={`flag-btn ${i18n.language === "en" ? "active" : ""}`}
                onClick={() => changeLanguage("en")}
                aria-label="Switch to English"
            >
                <img src="/uk.png" alt="English" />
            </button>
            <button
                className={`flag-btn ${i18n.language === "nl" ? "active" : ""}`}
                onClick={() => changeLanguage("nl")}
                aria-label="Schakel naar Nederlands"
            >
                <img src="/nl.png" alt="Nederlands" />
            </button>
        </div>
    );
}

export default LanguageSwitcher;
