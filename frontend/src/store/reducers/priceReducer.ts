import {
  IPriceState,
  PriceActionTypes,
  PriceActionType,
} from "../../types/store/reducers/priceReducer";

const initialState: IPriceState = {
  choicePizzas: [
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
      namePizza: "Four seasons",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 395,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
      namePizza: "Margarita",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 450,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      namePizza: "Pepperoni",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 675,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      namePizza: "Cheeseburger pizza",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 415,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      namePizza: "Cheese",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 245,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      namePizza: "Pepperoni Fresh with pepper",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 803,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
      namePizza: "Barbecue chicken",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 295,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
      namePizza: "Crazy pepperoni",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 580,
    },
    {
      imgPizza:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
      namePizza: "Sweet and sour chicken",
      typePizza: "thin",
      cm: 26,
      choise: 0,
      price: 275,
    },
  ],
  totalCost: 0,
};

export const priceReducer = (
  state: IPriceState = initialState,
  action: PriceActionType,
): IPriceState => {
  switch (action.type) {
    case PriceActionTypes.ADD_PIZZAS:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          if (cp.namePizza === action.payloadNamePizza) {
            cp.choise += action.payload;
          }
          return cp;
        }),
        totalCost: state.totalCost + 1,
      };
    case PriceActionTypes.REMOVE_PIZZA_ONE:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          if (cp.namePizza === action.payloadNamePizza) {
            if (cp.choise === 1) {
              return cp;
            } else {
              cp.choise -= action.payload;
            }
          }
          return cp;
        }),
        totalCost: state.totalCost - 1,
      };
    case PriceActionTypes.REMOVE_PIZZA:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          if (cp.namePizza === action.payloadNamePizza) {
            cp.choise = 0;
            cp.typePizza = "thin";
            cp.cm = 26;
          }
          return cp;
        }),
      };
    case PriceActionTypes.REMOVE_PIZZA_TOTAL_COST:
      return {
        ...state,
        totalCost: state.totalCost - action.payloadTotalCost,
      };
    case PriceActionTypes.REMOVE_PIZZA_ALL:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          cp.choise = 0;
          cp.typePizza = "thin";
          cp.cm = 26;

          return cp;
        }),
        totalCost: 0,
      };
    case PriceActionTypes.CHANGE_TYPE_PIZZA:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          if (cp.namePizza === action.payloadNamePizza) {
            cp.typePizza = action.payload;
          }
          return cp;
        }),
      };
    case PriceActionTypes.CHANGE_TYPE_CM:
      return {
        ...state,
        choicePizzas: state.choicePizzas.map((cp) => {
          if (cp.namePizza === action.payloadNamePizza) {
            cp.cm = action.payload;
          }
          return cp;
        }),
      };
    default:
      return state;
  }
};
