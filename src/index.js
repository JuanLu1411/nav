// App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>{t('navHome')}</li>
            <li>{t('navAbout')}</li>
          </ul>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </nav>
      </header>
    </div>
  );
}

export default App;
