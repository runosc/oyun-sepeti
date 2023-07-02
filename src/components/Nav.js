import React from "react";
import { FaUser, FaUserPlus, FaMoon, FaShoppingCart, FaGamepad } from "react-icons/fa";
import { connect } from "react-redux";
import Switcher from "../components/Switcher";
import SelectLanguage from "../components/SelectLanguage";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Nav = (props) => {
  const { t, i18n } = useTranslation();

 const cart=props.cart.cart
 return (
  <div className="bg-nwhite text-nblack dark:bg-nblack dark:text-nwhite border-b-2 border-primary mb-10">
    <div className="p-4 flex flex-wrap items-center justify-between text-lg max-w-7xl mx-auto">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
        <span className="font-bold text-4xl text-primary">Oyuncu Sepeti</span>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link to="/" className="flex items-center hover:text-primary">
          <FaGamepad className="mr-1" />
          {t('oyunlar')}

        </Link>
        <Link to="/cart" className="flex items-center hover:text-primary">
          <div className="flex items-center justify-center">
            <FaShoppingCart className="mr-1" />
                {t('sepet')}
            <div className="bg-primary rounded-full px-2 ml-1 flex items-center justify-center hover:text-nblack">
              {cart.length}
            </div>
          </div>
        </Link>

        <button className="px-4 py-2 bg-primary shadow-lg shadow-primary/50 rounded hover:bg-primary/50 flex items-center animate-bounce">
          <FaUser className="mr-1" />
          {t('giris')}


        </button>
        <button className="px-4 py-2 border shadow-lg shadow-primary/50 border-primary hover:text-primary rounded flex items-center">
          <FaUserPlus className="mr-1" />
          {t('uyeOl')}

        </button>
        <Switcher className="" />
        <SelectLanguage />

      </div>
    </div>
  </div>
);
};




const mapStateToProps = (cart) => {
  return cart
};

  export default connect(mapStateToProps)(Nav);