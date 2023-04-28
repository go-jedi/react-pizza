interface IPriceStateRows {
  imgPizza: string;
  namePizza: string;
  choise: number;
  price: number;
  typePizza: string;
  cm: number;
}

export interface IPriceState {
  choicePizzas: IPriceStateRows[];
  totalCost: number;
}

export enum PriceActionTypes {
  ADD_PIZZAS = "ADD_PIZZAS",
  REMOVE_PIZZA_ONE = "REMOVE_PIZZA_ONE",
  REMOVE_PIZZA = "REMOVE_PIZZA",
  REMOVE_PIZZA_TOTAL_COST = "REMOVE_PIZZA_TOTAL_COST",
  REMOVE_PIZZA_ALL = "REMOVE_PIZZA_ALL",
  CHANGE_TYPE_PIZZA = "CHANGE_TYPE_PIZZA",
  CHANGE_TYPE_CM = "CHANGE_TYPE_CM",
}

interface IAddPizzasAction {
  type: PriceActionTypes.ADD_PIZZAS;
  payload: number;
  payloadNamePizza: string;
}

interface IRemoveOnePizzasAction {
  type: PriceActionTypes.REMOVE_PIZZA_ONE;
  payload: number;
  payloadNamePizza: string;
}

interface IRemovePizzasAction {
  type: PriceActionTypes.REMOVE_PIZZA;
  payloadNamePizza: string;
}

interface IRemovePizzasAllAction {
  type: PriceActionTypes.REMOVE_PIZZA_ALL;
}

interface IRemovePizzasActionTotalCost {
  type: PriceActionTypes.REMOVE_PIZZA_TOTAL_COST;
  payloadTotalCost: number;
}

interface IChangePizzasTypeAction {
  type: PriceActionTypes.CHANGE_TYPE_PIZZA;
  payload: string;
  payloadNamePizza: string;
}

interface IChangePizzasCmAction {
  type: PriceActionTypes.CHANGE_TYPE_CM;
  payload: number;
  payloadNamePizza: string;
}

export type PriceActionType =
  | IAddPizzasAction
  | IRemoveOnePizzasAction
  | IRemovePizzasAction
  | IRemovePizzasActionTotalCost
  | IRemovePizzasAllAction
  | IChangePizzasTypeAction
  | IChangePizzasCmAction;
