/* // i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './traducciones/EN/global.json';
import esTranslations from './traducciones/ES/global.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
*/

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_es from './traducciones/ES/global.json';
import global_en from './traducciones/EN/global.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

export default i18n;
