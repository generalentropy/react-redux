import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";
import Logout from "./features/userAuth/Logout";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!isLogged ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
          <Logout />
        </>
      )}
    </div>
  );
}

export default App;
