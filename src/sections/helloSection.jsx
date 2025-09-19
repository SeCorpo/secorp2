import AnimatedSection from '../components/AnimatedSection.jsx';
import { ReactTyped } from 'react-typed';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const HelloSection = () => {
    const { t } = useTranslation();
    const paragraphs = t("hello_body").split("\n");

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <AnimatedSection>
            <h2>{t("hello_header")}</h2>

            {paragraphs.map((text, index) => (
                <p key={index}>
                    {index <= currentIndex && (
                        <ReactTyped
                            strings={[text]}
                            typeSpeed={10}
                            showCursor={false}
                            onComplete={() => {
                                if (index === currentIndex && currentIndex < paragraphs.length - 1) {
                                    setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
                                }
                            }}
                        />
                    )}
                </p>
            ))}
        </AnimatedSection>
    );
};

export default HelloSection;
