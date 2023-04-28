import axios from "axios";
import { Dispatch } from "redux";

import { PizzaActionType, PizzaActionTypes } from "../../types/store/reducers/pizzaReducer";
import { IsortBy } from "../../types/store/action-creators/pizza";

export const fetchPizzas = (category: string | null = null, sortBy: IsortBy) => {
  return async (dispatch: Dispatch<PizzaActionType>) => {
    try {
      dispatch({ type: PizzaActionTypes.FETCH_PIZZAS, payload: category, payloadSortBy: sortBy });
      const response = await axios.get(
        `http://localhost:8080/api-v1/pizza?${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=${sortBy.order}`,
      );
      if (response.data.status === 200) {
        setTimeout(() => {
          dispatch({ type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS, payload: response.data.result });
        }, 300);
      }
    } catch (error) {
      dispatch({ type: PizzaActionTypes.FETCH_PIZZAS_ERROR, payload: "Ошибка получения пицц" });
    }
  };
};
