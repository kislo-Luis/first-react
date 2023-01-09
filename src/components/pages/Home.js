import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Isotopos de Springfield</h1>

      <p>
        Los Isotopos de Springfield son un equipo de béisbol profesional en el
        que ha jugado Bart Simpson en algunos episodios. Eran los ídolos de
        Homero Simpson hasta que se harto de su racha perdedora. Luego cuando
        volvieron a ganar otra vez, Homer volvió a hacerse fan de el equipo. En
        uno de los episodios, el dueño del equipo lo quiere cambiar a
        Albuquerque. En este mismo episodio, Homer comienza una huelga de hambre
        en protesta por el cambio, aunque la afición no le creía.
      </p>

      <Link to="/menu">
        <Button color="primary"> Atras </Button>
      </Link>

      <Link to='#'>
        <Button color="dark"> Leer más... </Button>
      </Link>
    </div>
  );
};
