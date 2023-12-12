import { Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { RouterAuth } from "../auth/routes/RouterAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { RouterJournal } from "../journal/routes/RouterJournal";

export const AppRoutes = [
  {
    path: "/auth/*",
    element: <RouterAuth />,
    children: AuthRoutes,
  },
  {
    path: "/",
    element: <RouterJournal />,
    children: JournalRoutes,
  },
  {
     path: "/*",
     element: <Navigate to={"/"} />,
  },
];
