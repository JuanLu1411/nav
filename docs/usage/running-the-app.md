# Running the App

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>To run the application, use the following command:</p>
    <pre>
    npm start
    </pre>
    <p>This will start the application in development mode. Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>
</div>

<div id="content-es" style="display:none;">
    <p>Para ejecutar la aplicación, utiliza el siguiente comando:</p>
    <pre>
    npm start
    </pre>
    <p>Esto iniciará la aplicación en modo de desarrollo. Abre <a href="http://localhost:3000">http://localhost:3000</a> para verla en el navegador.</p>
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
