import {
  Button,
  Card as CardComp,
  CardText,
  CardSubtitle,
  CardTitle,
  CardBody,
  NavLink,
} from "reactstrap";

export const Card = (props) => {
  return (
    <div>
      <CardComp
        color="primary"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={props.img} />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
          <CardText>{props.content}</CardText>

          <NavLink href="https://github.com/reactstrap/reactstrap">
            <Button color="dark"> Leer más... </Button>
          </NavLink>
        </CardBody>
      </CardComp>
    </div>
  );
};
