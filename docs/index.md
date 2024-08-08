# Documento de ejemplo

Puedes descargar el documento PDF haciendo clic en el siguiente botón:

<p>
  <a href="./pdf/index.pdf" download>
    <button id="boton" style="padding: 10px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Descargar PDF
    </button>
  </a>
</p>

<p>
  <button id="cambiarIdiomaBoton" onclick="cambiarIdioma()" style="padding: 10px 15px; background-color: #008CBA; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Change to English
  </button>
</p>

<p id="idioma-actual" style="display: none;">es</p>

<script>
  function cambiarIdioma() {
    const elementos = {
      titulo: document.getElementById('titulo'),
      descripcion: document.getElementById('descripcion'),
      boton: document.getElementById('boton'),
      cambiarIdiomaBoton: document.getElementById('cambiarIdiomaBoton'),
      idiomaActual: document.getElementById('idioma-actual'),
    };

    const textos = {
      es: {
        titulo: 'Documento de ejemplo',
        descripcion: 'Puedes descargar el documento PDF haciendo clic en el siguiente botón:',
        boton: 'Descargar PDF',
        cambiarIdiomaBoton: 'Change to English',
        idiomaActual: 'es',
      },
      en: {
        titulo: 'Example Document',
        descripcion: 'You can download the PDF document by clicking the button below:',
        boton: 'Download PDF',
        cambiarIdiomaBoton: 'Cambiar a Español',
        idiomaActual: 'en',
      }
    };

    const nuevoIdioma = elementos.idiomaActual.innerText === 'es' ? 'en' : 'es';

    // Cambia el texto de los elementos según el idioma seleccionado
    for (const [clave, valor] of Object.entries(textos[nuevoIdioma])) {
      elementos[clave].innerText = valor;
    }
  }
</script>

<h1 id="titulo">Documento de ejemplo</h1>
<p id="descripcion">Puedes descargar el documento PDF haciendo clic en el siguiente botón:</p>
