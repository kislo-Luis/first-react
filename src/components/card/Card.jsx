import {
  Button,
  Card as CardComp,
  CardText,
  CardSubtitle,
  CardTitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
export const Card = () => {
  return (
    <div>
      <CardComp
        color="primary"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="/isotopes.png" />
        <CardBody>
          <CardTitle tag="h5">Isotopos de Springfield</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            ...de albuquerque?
          </CardSubtitle>
          <CardText>
            Los Isotopos de Springfield son un equipo de béisbol profesional en
            el que ha jugado Bart Simpson en algunos episodios.
          </CardText>
          <Link to="#">
            <Button color="dark"> Leer más... </Button>
          </Link>
        </CardBody>
      </CardComp>

      <Link to="/menu">
        <Button color="primary"> Atras </Button>
      </Link>
    </div>
  );
};
