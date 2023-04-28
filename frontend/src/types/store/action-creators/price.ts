interface IPriceStateRows {
  namePizza: string;
  choise: number;
  price: number;
}

export interface IPriceState {
  choicePizzas: IPriceStateRows[];
  totalAmount: number;
}

export enum PriceActionTypes {
  ADD_PIZZAS = "ADD_PIZZAS",
}

interface IAddPizzasAction {
  type: PriceActionTypes.ADD_PIZZAS;
  payload: number;
  payloadNamePizza: string;
}

export type PriceActionType = IAddPizzasAction;
