# i18next Configuration

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>i18next is configured in the <code>src/i18n.js</code> file. Here is how it is set up:</p>
    <pre>
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import Backend from 'i18next-http-backend';
    import LanguageDetector from 'i18next-browser-languagedetector';
    
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            debug: true,
            interpolation: {
                escapeValue: false
            }
        });
    
    export default i18n;
    </pre>
</div>

<div id="content-es" style="display:none;">
    <p>i18next se configura en el archivo <code>src/i18n.js</code>. Así es como se configura:</p>
    <pre>
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import Backend from 'i18next-http-backend';
    import LanguageDetector from 'i18next-browser-languagedetector';
    
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            debug: true,
            interpolation: {
                escapeValue: false
            }
        });
    
    export default i18n;
    </pre>
</div>

<script>
    function showLanguage(language) {
        if (language === 'en') {
            document.getElementById('content-en').style.display = 'block';
            document.getElementById('content-es').style.display = 'none';
        } else if (language === 'es') {
            document.getElementById('content-en').style.display = 'none';
            document.getElementById('content-es').style.display = 'block';
        }
    }
</script>
