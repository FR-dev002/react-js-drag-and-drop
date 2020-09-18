import React from "react";
interface Person {
  name: string;
  isDeleted?: boolean;
}

interface Props {}

const LoadingPage: React.FC<Props> = ({...props}) => {
	return <p>Loading... </p>
};

export default LoadingPage;
