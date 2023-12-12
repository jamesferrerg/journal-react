import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hook";

export const RouterAuth = () => {

  const {status} = useCheckAuth();
 
  if (status === 'authenticated') {
    return <Navigate to='/*' />;
  }

  return <Outlet />
};
