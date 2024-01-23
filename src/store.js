import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import authReducer from "./features/userAuth/authSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    auth: authReducer,
  },
});

export default store;
