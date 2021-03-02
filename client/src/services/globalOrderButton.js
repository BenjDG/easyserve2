import React, { createContext, useReducer, useContext } from 'react';

const OrderContext = createContext([{
  orderId: '',
  itemId: '',
  title: '',
  price: ''
}]);
const { Provider } = OrderContext;

function reducer (state, action) {
  switch (action.type) {
    case 'add':
      console.log(action);
      return [
        {
          orderId: action.orderId,
          itemId: action.itemId,
          title: action.title,
          price: action.price
        }
      ];
    case 'remove':
      console.log(action);
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
}

function OrderProviderButton ({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  console.log('Order Provider triggered');
  console.log(state);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useOrderButtonContext () {
  return useContext(OrderContext);
}

export { OrderProviderButton, useOrderButtonContext };
