<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traducción de Idioma</title>
  <style>
    button {
      padding: 10px 15px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #boton-descarga {
      background-color: #4CAF50;
    }
    #boton-cambiar-idioma {
      background-color: #008CBA;
    }
  </style>
</head>
<body>
  <h1 id="titulo">Documento de ejemplo</h1>
  <p id="descripcion">Puedes descargar el documento PDF haciendo clic en el siguiente botón:</p>

  <p>
    <a href="./pdf/index.pdf" download>
      <button id="boton-descarga">
        Descargar PDF
      </button>
    </a>
  </p>

  <p>
    <button id="boton-cambiar-idioma" onclick="cambiarIdioma()">
      Change to English
    </button>
  </p>

  <p id="idioma-actual" style="display: none;">es</p>

  <script>
    function cambiarIdioma() {
      const elementos = {
        titulo: document.getElementById('titulo'),
        descripcion: document.getElementById('descripcion'),
        botonDescarga: document.getElementById('boton-descarga'),
        botonCambiarIdioma: document.getElementById('boton-cambiar-idioma'),
        idiomaActual: document.getElementById('idioma-actual'),
      };

      const textos = {
        es: {
          titulo: 'Documento de ejemplo',
          descripcion: 'Puedes descargar el documento PDF haciendo clic en el siguiente botón:',
          botonDescarga: 'Descargar PDF',
          botonCambiarIdioma: 'Change to English',
          idiomaActual: 'es',
        },
        en: {
          titulo: 'Example Document',
          descripcion: 'You can download the PDF document by clicking the button below:',
          botonDescarga: 'Download PDF',
          botonCambiarIdioma: 'Cambiar a Español',
          idiomaActual: 'en',
        }
      };

      const nuevoIdioma = elementos.idiomaActual.innerText === 'es' ? 'en' : 'es';

      // Cambia el texto de los elementos según el idioma seleccionado
      for (const [clave, valor] of Object.entries(textos[nuevoIdioma])) {
        if (elementos[clave]) {
          elementos[clave].innerText = valor;
        }
      }

      // Actualiza el idioma actual
      elementos.idiomaActual.innerText = nuevoIdioma;
    }
  </script>
</body>
</html>
