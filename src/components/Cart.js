import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepetiTemizle, adetArttir, adetAzalt } from "../actions";
import { FaTrash } from "react-icons/fa";
import PeopleList from "./PeopleList";
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next';


const Cart = (props) => {
  const { t, i18n } = useTranslation();

    const cart = props.cart.cart
    const totalPrice = cart.reduce(
        (total, item) => (total += (item.price * item.adet)),
        0
    );

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: .2 } }}
            className="text-nblack dark:text-nwhite">
            <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
                <div className="col-span-2">
                    <p className="w-100 bg-primary text-white font-bold px-2 py-2 text-center">{t('sepet')}</p>
                    {cart.map((game, index) => (
                        <div className="flex border mb-5 justify-between" key={index}>
                            <div className="flex items-center">
                                <img className="w-48 h-48 object-cover rounded" src={game.image} alt={game.name} />
                                <div className="ml-5">
                                    <h4 className="text-lg font-bold">{game.name}</h4>
                                    <p>{t('cikisTarihi')}: {game.release_year}</p>
                                    <p>{t('yayinci')}: {game.publisher}</p>
                                    <p className="text-lg font-bold">{game.price}$</p>
                                </div>
                            </div>
                            <div className="items-center flex mr-5">
                                <div className="border rounded-xl h-fit px-4 py-2">
                                    {game.adet === 1 ? (
                                        <button className="text-3xl font-bold text-red-500" onClick={() => props.adetAzalt(game)}>
                                            <FaTrash size={20} /> 
                                        </button>
                                    ) : (
                                        <button className="text-3xl font-bold text-red-500" onClick={() => props.adetAzalt(game)}>
                                            - 
                                        </button>
                                    )}
                                    <span className="font-bold text-2xl px-4">{game.adet}</span>
                                    <button className="text-3xl font-bold text-green-500" onClick={() => props.adetArttir(game)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:ml-5 sm:ml-0 order-first md:order-last mb-5 md:mb-0">
                    <p className="w-100 bg-primary text-white font-bold px-2 py-2 text-center">{t('islemler')}</p>

                    <h3 className="px-2 py-2 border font-bold">{t('toplamSepetTutari')}: {totalPrice.toFixed(2)}$</h3>
                    <h3 className="px-2 py-2 border font-bold text-green-500">{t('indirim')}: 0$</h3>
                    <h3 className="px-2 py-2 border font-bold">{t('odenecekTutar')}: {totalPrice.toFixed(2)} $</h3>

                    <div className="flex mt-5">
                        <button className="px-4 py-2 mr-5 bg-green-500 hover:bg-green-400 rounded shadow-lg shadow-green-600/50 text-white">
                        {t('sepetiOnayla')}
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 hover:bg-red-400 rounded shadow-lg shadow-red-600/50 text-white flex items-center"
                            onClick={() => props.sepetiTemizle()}
                        >
                            <FaTrash className="mr-2" />
                            {t('sepetiTemizle')}
                        </button>
                    </div>
                    <div className="mt-5">
                        {/* Bir işlevi yok API kullanımına örnek olması açısından yazdım */}
                        <p className="w-100 bg-primary text-white font-bold px-2 py-2 text-center">{t('hediye')}</p>
                        <div className="">
                            <PeopleList />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>

    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps, { sepetiTemizle, adetArttir, adetAzalt })(Cart);
