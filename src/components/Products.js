import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { sepeteEkle, adetArttir, adetAzalt } from "../actions";

const Products = (props) => {
  const gameList = props.cart.gameList;
  const cart = props.cart.cart;

  const [animate, setAnimate] = useState(false);
  const [showQuantityButtons, setShowQuantityButtons] = useState({});
  const [selectedGame, setSelectedGame] = useState(null); // game state'i
  const [cartSelectedGame, setCartSelectedGame] = useState(0); // game state'i



  const handleButtonClick = (game) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    setSelectedGame(game);
    props.sepeteEkle(game);
    // console.log("game1", game)
    // console.log("game id1",  game.id)
    // console.log("cart1", cart)
    // console.log(cart.find(w => w.id === game.id))
    // setShowQuantityButtons(game.id);
    showButtonsForGame(game.id)
  };
  const showButtonsForGame = (gameId) => {
    setShowQuantityButtons((prevShowQuantityButtons) => ({
      ...prevShowQuantityButtons,
      [gameId]: true,
    }));
  };

  return (
    <div className="">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center">
        {gameList.map((game) => (
          <div
            className="border shadow-lg rounded p-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-nwhite dark:bg-nblack dark:text-nwhite dark:border-nwhite border-nblack"
            key={game.id}
          >
            <h4 className="text-lg font-bold mb-1 truncate ">{game.name}</h4>

            <div className="flex justify-center mb-1">
              <img
                className="w-48 h-48 object-cover rounded"
                src={game.image}
                alt={game.name}
              />
            </div>
            <div>
              <p>Release Year: {game.release_year}</p>
              <p>Publisher: {game.publisher}</p>
              <p className="text-lg font-bold">{game.price}$</p>
            </div>
            {cart.find((w) => w.id === game.id) ? (
              <div className="flex justify-center items-center">
                <div>
                  <button
                    className={`px-2 py-1 bg-red-600 text-white rounded hover:bg-red-400`}
                    onClick={() => props.adetAzalt(game)}
                  >
                    -
                  </button>
                  <span className="mx-2">
                    {cart.find((w) => w.id === game.id) ? cart.find((w) => w.id === game.id).adet : 0}
                  </span>
                  <button
                    className={`px-2 py-1 bg-green-600 text-white rounded hover:bg-green-400`}
                    onClick={() => props.adetArttir(game)}
                  >
                    +
                  </button>
                </div>
              </div>
            ) : showQuantityButtons[game.id] ? (
              <div className="flex justify-center items-center">
              <div>
                <button
                  className={`px-2 py-1 bg-red-600 text-white rounded hover:bg-red-400`}
                  onClick={() => props.adetAzalt(game)}
                >
                  -
                </button>
                <span className="mx-2">{
                  cart.find((w) => w.id === game.id) ? cart.find((w) => w.id === game.id).adet : 0
                }</span>
                <button
                  className={`px-2 py-1 bg-green-600 text-white rounded hover:bg-green-400`}
                  onClick={() => props.adetArttir(game)}
                >
                  +
                </button>
              </div>
            </div>
            ): (
              <button
              className={`px-4 py-2 bg-green-600 shadow-lg shadow-green-600/50 text-white rounded hover:bg-green-400 ${animate ? "focus:animate-bounce focus:bg-primary focus:ease-in duration-200 " : ""
                }`}
              onClick={() => handleButtonClick(game)}
            >
              Sepete Ekle
            </button>
              )}
        
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (cart) => {
  return cart;
};

export default connect(mapStateToProps, { sepeteEkle, adetArttir, adetAzalt })(Products);
