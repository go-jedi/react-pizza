import * as PizzaActionCreators from "./pizza";
import * as PriceActionCreators from "./price";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...PizzaActionCreators,
  ...PriceActionCreators,
};
