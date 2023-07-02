export const sepeteEkle = (book) => {
    return { type: "SEPETE_EKLE", payload: book };
  };
  
  export const sepetiTemizle = (book) => {
    return { type: "SEPETI_TEMIZLE", payload: book };
  };
  
  export const adetArttir = (book) => {
    return { type: "ADET_ARTTIR", payload: book };
  };

  export const adetAzalt = (book) => {
    return { type: "ADET_AZALT", payload: book };
  };