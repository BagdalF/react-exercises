// import Escalation from "./Components/Escalation/Escalation";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import CountriesPage from "./Pages/CountriesPage";
import NavBar from "./Components/NavBar";
import EscalationPage from "./Pages/Saved/EscalationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/start",
        element: <CountriesPage />,
      },
      {
        path: "/escalation",
        element: <EscalationPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
