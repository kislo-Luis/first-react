import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

export const Profile = () => {
  return (
    <div>
      <Link to='/home'>
        <Button color="primary">Ingresar sin iniciar sesión</Button>
      </Link>
    </div>
  );
};
