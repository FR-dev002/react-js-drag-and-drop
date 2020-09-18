import React from "react";
import {Card} from "react-bootstrap";

interface Props {
	title: string;
	style?: {};
}

const cardWird = {
	width: "18rem",
};

const CardComponent: React.FC<Props> = ({style, children, title}) => {
	return (
		<Card style={cardWird && style}>
			<Card.Header>
				<Card.Title className="text-center" data-test="card-title">
					{title}
				</Card.Title>
			</Card.Header>
			<Card.Body data-test="card-body">{children}</Card.Body>
		</Card>
	);
};

export default CardComponent;
