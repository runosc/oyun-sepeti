import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('guncelDil', selectedLanguage);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}  className='bg-nwhite dark:bg-nblack py-1 px-2 border border-primary rounded'>
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
    </select>
  );
};

export default LanguageSelect;