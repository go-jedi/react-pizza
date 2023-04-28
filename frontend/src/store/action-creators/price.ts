import { Dispatch } from "redux";

import { PriceActionType, PriceActionTypes } from "../../types/store/reducers/priceReducer";

export const addPizzas = (needNumber: number, namePizza: string) => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.ADD_PIZZAS,
        payload: needNumber,
        payloadNamePizza: namePizza,
      });
    } catch (error) {
      console.log("Ошибка добавления пицц");
    }
  };
};

export const removeOnePizza = (needNumber: number, namePizza: string) => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.REMOVE_PIZZA_ONE,
        payload: needNumber,
        payloadNamePizza: namePizza,
      });
    } catch (error) {
      console.log("Ошибка удаления одной пиццы");
    }
  };
};

export const removePizza = (namePizza: string, countOnDeletePizza: number) => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.REMOVE_PIZZA,
        payloadNamePizza: namePizza,
      });
      dispatch({
        type: PriceActionTypes.REMOVE_PIZZA_TOTAL_COST,
        payloadTotalCost: countOnDeletePizza,
      });
    } catch (error) {
      console.log("Ошибка удаления пиццы");
    }
  };
};

export const removePizzaAll = () => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.REMOVE_PIZZA_ALL,
      });
    } catch (error) {
      console.log("Ошибка удаления всех выбранных пицц");
    }
  };
};

export const addTypePizza = (namePizza: string, typePizza: string) => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.CHANGE_TYPE_PIZZA,
        payload: typePizza,
        payloadNamePizza: namePizza,
      });
    } catch (error) {
      console.log("Ошибка изменения типа пиццы");
    }
  };
};

export const addCmPizza = (namePizza: string, cmPizza: number) => {
  return async (dispatch: Dispatch<PriceActionType>) => {
    try {
      dispatch({
        type: PriceActionTypes.CHANGE_TYPE_CM,
        payload: cmPizza,
        payloadNamePizza: namePizza,
      });
    } catch (error) {
      console.log("Ошибка изменения размера пиццы");
    }
  };
};
