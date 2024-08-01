# Changing Language

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>The application supports multiple languages. To change the language, use the buttons provided in the UI.</p>
    <p>Available languages are:</p>
    <ul>
        <li>English</li>
        <li>Spanish</li>
    </ul>
    <p>You can add more languages by adding the appropriate translation files in the <code>public/locales</code> directory.</p>
</div>

<div id="content-es" style="display:none;">
    <p>La aplicación soporta múltiples idiomas. Para cambiar el idioma, utiliza los botones proporcionados en la interfaz de usuario.</p>
    <p>Los idiomas disponibles son:</p>
    <ul>
        <li>Inglés</li>
        <li>Español</li>
    </ul>
    <p>Puedes agregar más idiomas añadiendo los archivos de traducción correspondientes en el directorio <code>public/locales</code>.</p>
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
