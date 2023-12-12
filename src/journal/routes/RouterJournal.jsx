import { Outlet, Navigate } from "react-router-dom";
import { useCheckAuth } from "../../hook";

export const RouterJournal = () => {

  const {status} = useCheckAuth();
 
  if (status === 'not-authenticated') {
    return <Navigate to='/auth/login' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
