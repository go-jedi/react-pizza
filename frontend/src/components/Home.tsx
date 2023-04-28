import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoImg from "../assets/img/logo-pizza.svg";
import PaymentHeader from "../assets/img/payment-header.svg";
import SortImgOpen from "../assets/img/sort-img-open.svg";
import PlusOrange from "../assets/img/plus-orange.svg";
import { useTypesSelector } from "../hooks/useTypesSelector";
import LoadingBlock from "../assistant/loading/LoadingBlock";
import { useActions } from "../hooks/useActions";

const Home: React.FC = () => {
  const [sortMenu, setSortMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const sortMenuRef = useRef<any>();
  const { pizzas, loading, sortBy, category } = useTypesSelector((state) => state.pizza);
  const { choicePizzas, totalCost } = useTypesSelector((state) => state.price);
  const { fetchPizzas, addPizzas, addTypePizza, addCmPizza } = useActions();

  useEffect(() => {
    document.addEventListener("mousedown", (event: MouseEvent) => {
      if (sortMenuRef.current !== null) {
        if (!sortMenuRef.current.contains(event.target)) {
          setSortMenu(false);
        }
      }
    });
  }, []);

  const sortByNeedParams = (name: string = "popularity", type: string) => {
    if (sortBy.type !== type) {
      fetchPizzas(null, { name: name, type: type, order: "desc" });
      setSortMenu(false);
    } else if (sortBy.type === type) {
      if (sortBy.order === "desc") {
        fetchPizzas(null, { name: name, type: type, order: "asc" });
        setSortMenu(false);
      } else {
        fetchPizzas(null, { name: name, type: type, order: "desc" });
        setSortMenu(false);
      }
    }
  };

  const sortPizzasByCategory = (categoryNumber: string) => {
    fetchPizzas(categoryNumber, { name: "popularity", type: "rating", order: "desc" });
  };

  const calculateTotalAmount = () => {
    let x = 0;
    for (let i = 0; i < choicePizzas.length; i++) {
      if (choicePizzas[i].choise > 0) {
        x += choicePizzas[i].price * choicePizzas[i].choise;
      }
    }

    return x;
  };

  if (loading) {
    return <LoadingBlock />;
  }

  return (
    <div className="main-pizza">
      <div className="container">
        <div className="main-pizza-header">
          <div className="main-pizza-header__left">
            <div className="main-pizza-header__logo">
              <img
                onClick={() => {
                  sortByNeedParams("popularity", "rating");
                  navigate("/");
                }}
                src={LogoImg}
                alt="logo-pizza"
              />
            </div>
            <div className="main-pizza-header__info">
              <div className="main-pizza-header__info_name">REACT PIZZA</div>
              <div className="main-pizza-header__info_text">
                the most delicious pizza in the universe
              </div>
            </div>
          </div>
          <Link to="/basket" className="main-pizza-header__right">
            <div className="main-pizza-header__price">{calculateTotalAmount()} ₽</div>
            <div className="main-pizza-header__line"></div>
            <div className="main-pizza-header__count">
              <img src={PaymentHeader} alt="payment-header" />
              <p>{totalCost}</p>
            </div>
          </Link>
        </div>
        <div className="main-pizza__line"></div>
        <div className="main-pizza-menu">
          <div className="main-pizza-menu__item">
            <ul>
              <li>
                <a
                  onClick={() => sortByNeedParams("popularity", "rating")}
                  className={
                    category === null
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#2">
                  Everything
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortPizzasByCategory("1")}
                  className={
                    category === "1"
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#3">
                  Meat
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortPizzasByCategory("4")}
                  className={
                    category === "4"
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#4">
                  Vegetarian
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortPizzasByCategory("3")}
                  className={
                    category === "3"
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#5">
                  Grill
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortPizzasByCategory("2")}
                  className={
                    category === "2"
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#6">
                  Acute
                </a>
              </li>
              <li>
                <a
                  onClick={() => sortPizzasByCategory("5")}
                  className={
                    category === "5"
                      ? "main-pizza-menu__item_link_active"
                      : "main-pizza-menu__item_link"
                  }
                  href="#7">
                  Closed
                </a>
              </li>
            </ul>
          </div>
          <div className="main-pizza-menu__sort" ref={sortMenuRef}>
            <img className="main-pizza-menu__sort_img" src={SortImgOpen} alt="sort-img" />
            <div className="main-pizza-menu__sort_text">Sort by:</div>
            <div className="main-pizza-menu__sort_by">
              <a onClick={() => setSortMenu(!sortMenu)} href="#8">
                {sortBy.name}
              </a>
              <p></p>
            </div>
            <div
              className="main-pizza-menu__sort_submenu"
              style={{ display: sortMenu === false ? "none" : "" }}>
              <div>
                <a
                  onClick={() => sortByNeedParams("popularity", "rating")}
                  className={
                    sortBy.name === "popularity"
                      ? "main-pizza-menu__sort_submenu_link_active"
                      : "main-pizza-menu__sort_submenu_link"
                  }
                  href="#9">
                  popularity
                </a>
              </div>
              <div>
                <a
                  onClick={() => sortByNeedParams("by price", "price")}
                  className={
                    sortBy.name === "by price"
                      ? "main-pizza-menu__sort_submenu_link_active"
                      : "main-pizza-menu__sort_submenu_link"
                  }
                  href="#10">
                  by price
                </a>
              </div>
              <div>
                <a
                  onClick={() => sortByNeedParams("alphabetically", "name_pizza")}
                  className={
                    sortBy.name === "alphabetically"
                      ? "main-pizza-menu__sort_submenu_link_active"
                      : "main-pizza-menu__sort_submenu_link"
                  }
                  href="#11">
                  alphabetically
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-pizza-all">
          <div className="main-pizza-all__header">All pizzas</div>
          <div className="main-pizza-all__content">
            {pizzas.map((p) => {
              return (
                <div className="main-pizza-all__pizza" key={p.id}>
                  <div className="main-pizza-all__pizza_img">
                    <img src={p.image_url} alt="chisburger-pizza" />
                  </div>
                  <div className="main-pizza-all__pizza_name">{p.name_pizza}</div>
                  {choicePizzas.map((pf) => {
                    if (pf.namePizza === p.name_pizza) {
                      return (
                        <div className="main-pizza-all__choose" key={pf.namePizza}>
                          <div className="main-pizza-all__choose_dough">
                            <button
                              className={
                                pf.typePizza === "thin"
                                  ? "main-pizza-all__choose_dough_btn_active"
                                  : "main-pizza-all__choose_dough_btn"
                              }
                              onClick={() => addTypePizza(pf.namePizza, "thin")}>
                              thin
                            </button>
                            <button
                              className={
                                pf.typePizza === "traditional"
                                  ? "main-pizza-all__choose_dough_btn_active"
                                  : "main-pizza-all__choose_dough_btn"
                              }
                              onClick={() => addTypePizza(pf.namePizza, "traditional")}>
                              traditional
                            </button>
                          </div>
                          <div className="main-pizza-all__choose_size">
                            <button
                              className={
                                pf.cm === 26
                                  ? "main-pizza-all__choose_size_btn_active"
                                  : "main-pizza-all__choose_size_btn"
                              }
                              onClick={() => addCmPizza(pf.namePizza, 26)}>
                              26 cm.
                            </button>
                            <button
                              className={
                                pf.cm === 30
                                  ? "main-pizza-all__choose_size_btn_active"
                                  : "main-pizza-all__choose_size_btn"
                              }
                              onClick={() => addCmPizza(pf.namePizza, 30)}>
                              30 cm.
                            </button>
                            <button
                              className={
                                pf.cm === 40
                                  ? "main-pizza-all__choose_size_btn_active"
                                  : "main-pizza-all__choose_size_btn"
                              }
                              onClick={() => addCmPizza(pf.namePizza, 40)}>
                              40 cm.
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                  {choicePizzas.map((pft) => {
                    if (pft.namePizza === p.name_pizza) {
                      return (
                        <div className="main-pizza-all__add" key={pft.namePizza}>
                          <div className="main-pizza-all__add_price">от {p.price} ₽</div>
                          <button
                            className="main-pizza-all__add_buy"
                            onClick={() => addPizzas(1, p.name_pizza)}>
                            <img src={PlusOrange} alt="plus-orange" />
                            <div className="main-pizza-all__add_text">Add</div>
                            {pft.choise > 0 ? (
                              <div className="main-pizza-all__add_count">{pft.choise}</div>
                            ) : (
                              ""
                            )}
                          </button>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
