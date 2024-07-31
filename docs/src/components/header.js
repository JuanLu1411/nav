import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t("header.hello-World")}</h1>
            <br />
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
    );
}
