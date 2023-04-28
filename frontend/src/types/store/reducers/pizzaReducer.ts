interface IsortBy {
  name: string;
  type: string;
  order: string;
}

export interface IPizzaState {
  pizzas: any[];
  loading: boolean;
  error: null | string;
  category: string | null;
  sortBy: IsortBy;
}

export enum PizzaActionTypes {
  FETCH_PIZZAS = "FETCH_PIZZAS",
  FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS",
  FETCH_PIZZAS_ERROR = "FETCH_PIZZAS_ERROR",
  SET_SORT_BY = "SET_SORT_BY",
  SET_SORT_BY_SUCCESS = "SET_SORT_BY_SUCCESS",
  SET_SORT_BY_ERROR = "SET_SORT_BY_ERROR",
}

interface IFetchPizzasAction {
  type: PizzaActionTypes.FETCH_PIZZAS;
  payload: string | null;
  payloadSortBy: IsortBy;
}

interface IFetchPizzasSuccessAction {
  type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS;
  payload: any[];
}

interface IFetchPizzasErrorAction {
  type: PizzaActionTypes.FETCH_PIZZAS_ERROR;
  payload: string;
}

export type PizzaActionType =
  | IFetchPizzasAction
  | IFetchPizzasSuccessAction
  | IFetchPizzasErrorAction;
