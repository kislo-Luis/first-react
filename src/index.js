import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile } from "./components/pages/Profile";
import { Menu } from "./components/pages/Menu";
import { Home} from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "perfil",
        element: <Profile />,
      },

      {
        path: "menu",
        element: <Menu />,
      },

      {
        path: "home",
        element: <Home />,
      },

      

      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
