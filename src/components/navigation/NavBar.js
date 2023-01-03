import React from "react";
import { Navbar as NavbarReacstrap, NavbarBrand } from "reactstrap";

export const NavBar = () => {
  return (
    <div><NavbarReacstrap>
    <NavbarBrand href="/">
      {" "}
      <img
        alt="logo"
        src="/logo192.png"
        style={{ height: 80, width: 80 }}
      />
      Isotopos Web{" "}
    </NavbarBrand>
    <NavbarBrand href="#">
      {" "}
      <img
        alt="logo"
        src="/UserAvatar.png"
        style={{ height: 40, width: 40 }}
      />{" "}
    </NavbarBrand>
  </NavbarReacstrap></div>
  )
}


