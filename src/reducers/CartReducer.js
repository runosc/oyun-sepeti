import { data } from "../data";

const INITIAL_STATE = {
  gameList: data,
  cart: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedCart = state.cart.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, adet: item.adet + 1 };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, adet: 1 }] };
      }
    case "ADET_ARTTIR":
      const updatedCart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, adet: item.adet + 1 };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
   
    case "ADET_AZALT":
  const updatedCart2 = state.cart.map(item => {
    if (item.id === action.payload.id) {
      if (item.adet !== 1) {
        return { ...item, adet: item.adet - 1 };
      } else {
        return null;
      }
    }
    return item;
  });
  const filteredCart = updatedCart2.filter(item => item !== null); 
  return { ...state, cart: filteredCart };
    case "SEPETI_TEMIZLE":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export default CartReducer