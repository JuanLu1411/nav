import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarSpanish from './SidebarSpanish';
import SidebarEnglish from './SidebarEnglish';

const CustomTechDocsLayout = ({ children }) => {
  const location = useLocation();
  const isEnglish = location.pathname.includes('/en');

  return (
    <div className="techdocs-layout">
      {isEnglish ? <SidebarEnglish /> : <SidebarSpanish />}
      <main>{children}</main>
    </div>
  );
};

export default CustomTechDocsLayout;
