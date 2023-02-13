import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
   
    children: [
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "perfil",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
