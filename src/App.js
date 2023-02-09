import { NavBar } from "./components/NavBar/NavBar";
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
