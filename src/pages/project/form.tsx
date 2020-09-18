import React, {PropsWithChildren, Fragment} from "react";
import {ProjectContext} from "../../contexts/projectContext";
import {Modal, Button, Form, Row, Col} from "react-bootstrap";
import useProject from "../../hooks/project";
import {DefaultProps} from "../../interfaces/defaultProps";

export const ProjectFormComponent: React.FC<DefaultProps> = ({...props}) => {
	return (
		<Fragment>
			<Form>
				<Row>
					<Col>
						<Form.Control placeholder="First name" />
					</Col>
					<Col>
						<Form.Control placeholder="Last name" />
					</Col>
				</Row>
			</Form>
		</Fragment>
	);
};
