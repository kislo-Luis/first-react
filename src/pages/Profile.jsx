import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="buttom">
      <div className="back">
      <NavLink to="/">
        <Button>Atras</Button>
      </NavLink>
      </div>
    </div>
  );
};
