// NavComponent.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { parseMarkdown } from './parseMarkdown';
import i18n from './i18n';

const markdownFilePath = './docs/index.md';

function NavComponent() {
  const { t } = useTranslation();

  useEffect(() => {
    const lang = parseMarkdown(markdownFilePath);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <nav>
      <ul>
        <li>{t('navHome')}</li>
        <li>{t('navAbout')}</li>
      </ul>
    </nav>
  );
}

export default NavComponent;
