import React from "react";
interface Person {
	name: string;
	isDeleted?: boolean;
}

interface Props {}

const HomePage: React.FC<Props> = ({...props}) => {
	return <p>Halaman Home</p>;
};

export default HomePage;
