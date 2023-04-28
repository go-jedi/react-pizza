import React from "react";
import { useNavigate } from "react-router-dom";

import LogoImg from "../assets/img/logo-pizza.svg";
import SuccessIcon from "../assets/img/success-ico.png";

const EmptyBasket = () => {
  const navigate = useNavigate();
  return (
    <div className="main-pizza">
      <div className="container">
        <div className="main-pizza-header">
          <div className="main-pizza-header__left">
            <div className="main-pizza-header__logo">
              <img onClick={() => navigate("/")} src={LogoImg} alt="logo-pizza" />
            </div>
            <div className="main-pizza-header__info">
              <div className="main-pizza-header__info_name">REACT PIZZA</div>
              <div className="main-pizza-header__info_text">самая вкусная пицца во вселенной</div>
            </div>
          </div>
        </div>
        <div className="main-pizza__line"></div>
      </div>
      <div className="container-three">
        <div className="main-pizza-empty">
          <div className="main-pizza-empty__header">
            Успешная покупка!
            <p>😜</p>
          </div>
          <div className="main-pizza-empty__text">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
            главную страницу.
          </div>
          <div className="main-pizza-empty__img">
            <img src={SuccessIcon} alt="empty-logo" />
          </div>
          <div className="main-pizza-empty__btn">
            <button onClick={() => navigate("/")}>Начать сначала</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;
