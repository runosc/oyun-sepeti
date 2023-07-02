import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri dosyalarını yüklemek için i18next-http-backend kullanabilirsiniz
// Örneğin, i18next-http-backend'i yükleyip bu örnekte kullanabilirsiniz:
// import Backend from 'i18next-http-backend';

import enTranslation from './locales/en.json';
import trTranslation from './locales/tr.json';

const resources = {
  en: {
    translation: enTranslation
  },
  tr: {
    translation: trTranslation
  }
};

i18n
  // Çeviri kaynaklarını yükleme
  
  .init({
    resources,
    fallbackLng: localStorage.getItem('guncelDil')?localStorage.getItem('guncelDil'):"tr", // Desteklenmeyen bir dil kullanıldığında varsayılan dil
    debug: true, // Geliştirme için hata ayıklama modunu etkinleştirin
    interpolation: {
      escapeValue: false // Değişkenlerin çeviri metinlerinde kullanılmasına izin verir
    }
  })
 

export default i18n;