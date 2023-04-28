import {
  IPizzaState,
  PizzaActionTypes,
  PizzaActionType,
} from "../../types/store/reducers/pizzaReducer";

const initialState: IPizzaState = {
  pizzas: [],
  loading: false,
  error: null,
  category: null,
  sortBy: {
    name: "popularity",
    type: "rating",
    order: "desc",
  },
};

export const pizzaReducer = (
  state: IPizzaState = initialState,
  action: PizzaActionType,
): IPizzaState => {
  switch (action.type) {
    case PizzaActionTypes.FETCH_PIZZAS:
      return {
        ...state,
        loading: true,
        category: action.payload,
        sortBy: action.payloadSortBy,
        error: null,
        pizzas: [],
      };
    case PizzaActionTypes.FETCH_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pizzas: action.payload,
      };
    case PizzaActionTypes.FETCH_PIZZAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pizzas: [],
      };
    default:
      return state;
  }
};
