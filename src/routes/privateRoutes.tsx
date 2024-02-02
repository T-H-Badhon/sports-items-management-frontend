import React from "react";
import { useAppSelector } from "../redux/hooks";
import Login from "../pages/Login";

type TProps = {
  children: React.ReactNode;
};

const PrivateRoutes = ({ children }: TProps) => {
  const userState = useAppSelector((state) => state.auth);

  if (!userState._id) {
    return <Login></Login>;
  } else {
    return children;
  }
};

export default PrivateRoutes;
