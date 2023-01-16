import { CardJsx } from "../components/card/Card";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Link to="/card">
        <CardJsx />
      </Link>
    </div>
  );
};
