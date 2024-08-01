import fm from 'front-matter';
import fs from 'fs';

export const parseMarkdown = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const content = fm(fileContent);
  return content.attributes.lang;
};
