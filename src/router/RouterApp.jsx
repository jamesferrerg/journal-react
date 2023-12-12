import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hook";

const router = createBrowserRouter(AppRoutes);

export const RouterApp = () => {

  const { status } = useCheckAuth();

  if(status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
