import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Para cargar traducciones desde archivos
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar idioma del navegador

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma por defecto
    debug: true, // Opcional: para ver logs en la consola

    interpolation: {
      escapeValue: false, // No escapar valores para evitar problemas con React
    },
    backend: {
      // Cargar traducciones desde archivos estáticos
      loadPath: '/components/header.js',
    },
  });

export default i18n;
