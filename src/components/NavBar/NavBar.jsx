import { NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import { Navbar as NavbarReacstrap } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <NavbarReacstrap color="dark" dark>
        <Link to="/home">
          <img
            alt="logo"
            src="/logo192.png"
            style={{ height: 80, width: 80 }}
          />
          Isotopos Web
        </Link>

        <NavbarBrand href="/home">Productos</NavbarBrand>
        <NavbarBrand href="/perfil">Nosotros</NavbarBrand>
        <NavbarBrand href="/perfil">Contacto</NavbarBrand>

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
