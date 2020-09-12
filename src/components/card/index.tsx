import React from "react";
import { Card } from "react-bootstrap";

interface Props {
    title: string,
    style?: object,
}

const cardWird = {
    width: '18rem'
  };

const CardComponent: React.FC<Props> = ({style, children, title}) => {

  return (
    <Card style={cardWird && style}>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
