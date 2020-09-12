import React from "react";
import Button from 'react-bootstrap/Button';
interface Person {
  name: string;
  isDeleted?: boolean;
}

interface Props {
	title: string;
	onClick?:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Home: React.FC<Props> = ({title}) => {
	return <Button > {title} </Button>
};

export default Home;
