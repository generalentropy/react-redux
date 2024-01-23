import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch({ type: "auth/logout" });
    console.log("test");
  }

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
}
