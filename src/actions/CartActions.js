export const sepeteEkle = (game) => {
    return { type: "SEPETE_EKLE", payload: game };
  };
  
  export const sepetiTemizle = (game) => {
    return { type: "SEPETI_TEMIZLE", payload: game };
  };
  
  export const adetArttir = (game) => {
    return { type: "ADET_ARTTIR", payload: game };
  };

  export const adetAzalt = (game) => {
    return { type: "ADET_AZALT", payload: game };
  };