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
  