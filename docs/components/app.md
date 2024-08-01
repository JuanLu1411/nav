# App Component

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>The <code>App</code> component is the main component of the application. It initializes the i18next configuration and renders the <code>MarkdownContent</code> component.</p>
    <pre>
    import React from 'react';
    import MarkdownContent from './MarkdownContent';
    import './App.css';
    
    function App() {
        return (
            <div className="App">
                <MarkdownContent />
            </div>
        );
    }
    
    export default App;
    </pre>
</div>

<div id="content-es" style="display:none;">
    <p>El componente <code>App</code> es el componente principal de la aplicación. Inicializa la configuración de i18next y renderiza el componente <code>MarkdownContent</code>.</p>
    <pre>
    import React from 'react';
    import MarkdownContent from './MarkdownContent';
    import './App.css';
    
    function App() {
        return (
            <div className="App">
                <MarkdownContent />
            </div>
        );
    }
    
    export default App;
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
