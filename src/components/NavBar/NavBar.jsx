import { NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Navbar as NavbarReacstrap } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <NavbarReacstrap color="dark" dark>
        <NavLink to="/home">
          <img
            alt="logo"
            src="/logo192.png"
            style={{ height: 80, width: 80 }}
          />
          Isotopos Web
        </NavLink>

        <NavbarBrand href="/home">Productos</NavbarBrand>
        <NavbarBrand href="/perfil">Nosotros</NavbarBrand>
        <NavbarBrand href="/perfil">Contacto</NavbarBrand>

        <NavLink to="perfil">
          <img
            alt="logo"
            src="/UserAvatar.png"
            style={{ height: 40, width: 40 }}
          />
        </NavLink>
      </NavbarReacstrap>
    </div>
  );
};
