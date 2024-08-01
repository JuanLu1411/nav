# Installation

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>To install the application, follow these steps:</p>
    <ol>
        <li>Clone the repository:</li>
        <pre>git clone https://github.com/your-repo/my-i18n-markdown-app.git</pre>
        <li>Navigate into the project directory:</li>
        <pre>cd my-i18n-markdown-app</pre>
        <li>Install the dependencies:</li>
        <pre>npm install</pre>
        <li>Start the development server:</li>
        <pre>npm start</pre>
    </ol>
</div>

<div id="content-es" style="display:none;">
    <p>Para instalar la aplicación, sigue estos pasos:</p>
    <ol>
        <li>Clona el repositorio:</li>
        <pre>git clone https://github.com/your-repo/my-i18n-markdown-app.git</pre>
        <li>Navega al directorio del proyecto:</li>
        <pre>cd my-i18n-markdown-app</pre>
        <li>Instala las dependencias:</li>
        <pre>npm install</pre>
        <li>Inicia el servidor de desarrollo:</li>
        <pre>npm start</pre>
    </ol>
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
