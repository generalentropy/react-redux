import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
// https://www.npmjs.com/package/@redux-devtools/extension
import { composeWithDevTools } from "@redux-devtools/extension";

import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
