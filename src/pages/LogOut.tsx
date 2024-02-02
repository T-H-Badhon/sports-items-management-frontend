import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/slices/authSlice";
import Login from "./Login";

const LogOut = () => {
  const dispatch = useAppDispatch();

  dispatch(logOut());

  return <Login></Login>;
};

export default LogOut;
