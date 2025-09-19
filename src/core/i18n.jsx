import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../assets/locales/en.json";
import nl from "../assets/locales/nl.json";

const savedLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        nl: { translation: nl },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
