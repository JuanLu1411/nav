# Documento de ejemplo

Puedes descargar el documento PDF haciendo clic en el siguiente botón:


<p>
  <a href="./pdf/index.pdf" download>
    <button style="padding: 10px 15px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">
      Descargar PDF
    </button>
  </a>
</p>


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Documento de ejemplo</title>
  <script>
    function cambiarIdioma() {
      const idiomaActual = document.getElementById('idioma-actual').innerText;
      if (idiomaActual === 'es') {
        document.getElementById('titulo').innerText = 'Example Document';
        document.getElementById('descripcion').innerText = 'You can download the PDF document by clicking the button below:';
        document.getElementById('boton').innerText = 'Download PDF';
        document.getElementById('idioma-actual').innerText = 'en';
        document.getElementById('cambiarIdiomaBoton').innerText = 'Cambiar a Español';
      } else {
        document.getElementById('titulo').innerText = 'Documento de ejemplo';
        document.getElementById('descripcion').innerText = 'Puedes descargar el documento PDF haciendo clic en el siguiente botón:';
        document.getElementById('boton').innerText = 'Descargar PDF';
        document.getElementById('idioma-actual').innerText = 'es';
        document.getElementById('cambiarIdiomaBoton').innerText = 'Change to English';
      }
    }
  </script>
</head>
<body>
  <h1 id="titulo">Documento de ejemplo</h1>
  <p id="descripcion">Puedes descargar el documento PDF haciendo clic en el siguiente botón:</p>

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
</body>
</html>
