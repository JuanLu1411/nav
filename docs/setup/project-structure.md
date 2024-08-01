# Project Structure

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>The project structure of My I18n Markdown App is as follows:</p>
    <pre>
    my-i18n-markdown-app/
    ├── node_modules/
    ├── public/
    │   ├── locales/
    │   │   ├── en/
    │   │   │   └── translation.json
    │   │   └── es/
    │   │       └── translation.json
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── i18n.js
    │   └── MarkdownContent.js
    ├── package.json
    └── package-lock.json
    </pre>
</div>

<div id="content-es" style="display:none;">
    <p>La estructura del proyecto My I18n Markdown App es la siguiente:</p>
    <pre>
    my-i18n-markdown-app/
    ├── node_modules/
    ├── public/
    │   ├── locales/
    │   │   ├── en/
    │   │   │   └── translation.json
    │   │   └── es/
    │   │       └── translation.json
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── i18n.js
    │   └── MarkdownContent.js
    ├── package.json
    └── package-lock.json
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
