import React from "react";
// import { useProductReducer } from './reducers'

import { Provider } from 'react-redux';

import store from './store';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//^^^^^MOVED INITIAL STATE OBJ FROM GLOBAL STATE TO THE REDUCER

//   return <Provider store={[state, dispatch]} {...props} />;
// };



// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default function StoreProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={store} {...props} />;
}