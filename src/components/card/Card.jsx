import {
  Button,
  Card as CardComp,
  CardText,
  CardSubtitle,
  CardTitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
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
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            ...de albuquerque?
          </CardSubtitle>
          <CardText>
            {props.content}
          </CardText>
          <Link to="#">
            <Button color="dark"> Leer más... </Button>
          </Link>
        </CardBody>
      </CardComp>

      
    </div>
  );
};
