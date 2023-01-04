import { NavBar } from "./components/navigation/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
