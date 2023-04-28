import React from "react";
import { useNavigate } from "react-router-dom";

import LogoImg from "../assets/img/logo-pizza.svg";
import EmptyLogo from "../assets/img/empty-logo.png";
import KorzinaImg from "../assets/img/korzina-img.svg";
import MusorkaKorzina from "../assets/img/musorka-korzina.svg";
import MinusKorzina from "../assets/img/minus-korzina.svg";
import PlusKorzina from "../assets/img/plush-korzina.svg";
import DeleteKorzina from "../assets/img/delete-korzina.svg";
import BackKorzina from "../assets/img/back-korzina.svg";

import { useTypesSelector } from "../hooks/useTypesSelector";
import { useActions } from "../hooks/useActions";

const Basket: React.FC = () => {
  const navigate = useNavigate();
  const { choicePizzas, totalCost } = useTypesSelector((state) => state.price);
  const { addPizzas, removeOnePizza, removePizza, removePizzaAll } = useActions();

  const filterChoicePizzas = choicePizzas.filter((fp) => fp.choise > 0);

  const calculateTotalAmount = () => {
    let x = 0;
    for (let i = 0; i < filterChoicePizzas.length; i++) {
      if (filterChoicePizzas[i].choise > 0) {
        x += filterChoicePizzas[i].price * filterChoicePizzas[i].choise;
      }
    }

    return x;
  };
  return (
    <div>
      {filterChoicePizzas.length > 0 ? (
        <div className="main-pizza">
          <div className="container">
            <div className="main-pizza-header">
              <div className="main-pizza-header__left">
                <div className="main-pizza-header__logo">
                  <img onClick={() => navigate("/")} src={LogoImg} alt="logo-pizza" />
                </div>
                <div className="main-pizza-header__info">
                  <div className="main-pizza-header__info_name">REACT PIZZA</div>
                  <div className="main-pizza-header__info_text">
                    самая вкусная пицца во вселенной
                  </div>
                </div>
              </div>
            </div>
            <div className="main-pizza__line"></div>
          </div>
          <div className="container-two">
            <div className="main-pizza-korzina">
              <div className="main-pizza-korzina__header">
                <div className="main-pizza-korzina__header_left">
                  <img src={KorzinaImg} alt="korzina-img" />
                  <div>Корзина</div>
                </div>
                <div className="main-pizza-korzina__header_right">
                  <a href="#12" onClick={() => removePizzaAll()}>
                    <img src={MusorkaKorzina} alt="musorka-korzina" />
                    <div>Очистить корзину</div>
                  </a>
                </div>
              </div>
              <div className="main-pizza-korzina__content">
                {/* pizzas */}
                {filterChoicePizzas.map((cp) => {
                  return (
                    <div className="main-pizza-korzina__pizza" key={cp.namePizza}>
                      <div className="main-pizza-korzina__pizza_line"></div>
                      <div className="main-pizza-korzina__pizzas">
                        <div className="main-pizza-korzina__pizzasinf">
                          <div className="main-pizza-korzina__pizza_img">
                            <img
                              src={cp.imgPizza}
                              style={{ width: "80px", height: "80px" }}
                              alt="korzina-chizburger-pizza"
                            />
                          </div>
                          <div className="main-pizza-korzina__pizza_info">
                            <div className="main-pizza-korzina__pizza_title">{cp.namePizza}</div>
                            <div className="main-pizza-korzina__pizza_text">
                              {cp.typePizza}, {cp.cm} cm.
                            </div>
                          </div>
                        </div>
                        <div className="main-pizza-korzina__pizza_count">
                          <button
                            disabled={totalCost <= filterChoicePizzas.length}
                            onClick={() => removeOnePizza(1, cp.namePizza)}>
                            <img src={MinusKorzina} alt="minus-korzina" />
                          </button>
                          <p>{cp.choise}</p>
                          <button onClick={() => addPizzas(1, cp.namePizza)}>
                            <img src={PlusKorzina} alt="plus-korzina" />
                          </button>
                        </div>
                        <div className="main-pizza-korzina__pizza_price">{cp.price} ₽</div>
                        <div className="main-pizza-korzina__pizza_remove">
                          <button onClick={() => removePizza(cp.namePizza, cp.choise)}>
                            <img src={DeleteKorzina} alt="delete-korzina" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="main-pizza-korzina__gener">
                <div className="main-pizza-korzina__gener_left">
                  Всего пицц:{" "}
                  <b>
                    {totalCost < filterChoicePizzas.length ? filterChoicePizzas.length : totalCost}{" "}
                    шт.
                  </b>
                </div>
                <div className="main-pizza-korzina__gener_right">
                  Сумма заказа: <b>{calculateTotalAmount()} ₽</b>
                </div>
              </div>
              <div className="main-pizza-korzina__btns">
                <div className="main-pizza-korzina__btns_left">
                  <button onClick={() => navigate("/")}>
                    <img src={BackKorzina} alt="back-korzina" />
                    <div>Вернуться назад</div>
                  </button>
                </div>
                <div className="main-pizza-korzina__btns_right">
                  <button
                    onClick={() => {
                      navigate("/successpay");
                      removePizzaAll();
                    }}>
                    <div>Оплатить сейчас</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-pizza">
          <div className="container">
            <div className="main-pizza-header">
              <div className="main-pizza-header__left">
                <div className="main-pizza-header__logo">
                  <img onClick={() => navigate("/")} src={LogoImg} alt="logo-pizza" />
                </div>
                <div className="main-pizza-header__info">
                  <div className="main-pizza-header__info_name">REACT PIZZA</div>
                  <div className="main-pizza-header__info_text">
                    самая вкусная пицца во вселенной
                  </div>
                </div>
              </div>
            </div>
            <div className="main-pizza__line"></div>
          </div>
          <div className="container-three">
            <div className="main-pizza-empty">
              <div className="main-pizza-empty__header">
                Корзина пустая
                <p>😕</p>
              </div>
              <div className="main-pizza-empty__text">
                Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди
                на главную страницу.
              </div>
              <div className="main-pizza-empty__img">
                <img src={EmptyLogo} alt="empty-logo" />
              </div>
              <div className="main-pizza-empty__btn">
                <button onClick={() => navigate("/")}>Вернуться назад</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
