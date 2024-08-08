import React, { useState } from 'react';

// Componente funcional en React
const TraduccionComponent = () => {
  // Estado para gestionar el idioma actual
  const [idioma, setIdioma] = useState('es');

  // Textos en diferentes idiomas
  const textos = {
    es: {
      titulo: 'Documento de ejemplo',
      descripcion: 'Puedes descargar el documento PDF haciendo clic en el siguiente botón:',
      botonDescarga: 'Descargar PDF',
      botonCambiarIdioma: 'Change to English',
    },
    en: {
      titulo: 'Example Document',
      descripcion: 'You can download the PDF document by clicking the button below:',
      botonDescarga: 'Download PDF',
      botonCambiarIdioma: 'Cambiar a Español',
    }
  };

  // Función para cambiar el idioma
  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  return (
    <div>
      <h1>{textos[idioma].titulo}</h1>
      <p>{textos[idioma].descripcion}</p>
      <p>
        <a href="./pdf/index.pdf" download>
          <button style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            {textos[idioma].botonDescarga}
          </button>
        </a>
      </p>
      <p>
        <button onClick={cambiarIdioma} style={{ padding: '10px 15px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {textos[idioma].botonCambiarIdioma}
        </button>
      </p>
    </div>
  );
};

export default TraduccionComponent;
