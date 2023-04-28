import { combineReducers } from "redux";

import { pizzaReducer } from "./pizzaReducer";
import { priceReducer } from "./priceReducer";

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
  price: priceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
