import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Navbar as NavbarReacstrap } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <NavbarReacstrap  color="dark" dark>
        <Link to="/home">
          <img
            alt="logo"
            src="/logo192.png"
            style={{ height: 80, width: 80 }}
          />
          Isotopos Web
        </Link>

        <Link to="/menu">
          <Button color="primary"> Menu </Button>
        </Link>

        <Link to="perfil">
          <img
            alt="logo"
            src="/UserAvatar.png"
            style={{ height: 40, width: 40 }}
          />
        </Link>
      </NavbarReacstrap>
    </div>
  );
};
