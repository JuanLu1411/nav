# MarkdownContent Component

<button onclick="showLanguage('en')">English</button>
<button onclick="showLanguage('es')">Español</button>

<div id="content-en">
    <p>The <code>MarkdownContent</code> component is responsible for rendering Markdown content. It uses the <code>marked</code> library to parse Markdown and convert it to HTML.</p>
    <pre>
    import React from 'react';
    import { marked } from 'marked';
    
    function MarkdownContent({ content }) {
        const htmlContent = marked(content);
    
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        );
    }
    
    export default MarkdownContent;
    </pre>
</div>

<div id="content-es" style="display:none;">
    <p>El componente <code>MarkdownContent</code> es responsable de renderizar contenido Markdown. Utiliza la biblioteca <code>marked</code> para analizar Markdown y convertirlo a HTML.</p>
    <pre>
    import React from 'react';
    import { marked } from 'marked';
    
    function MarkdownContent({ content }) {
        const htmlContent = marked(content);
    
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        );
    }
    
    export default MarkdownContent;
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
