import React, {PropsWithChildren, useState} from "react";
import MaterialTable, {MTableToolbar} from "material-table";
import {Col, Button, Container, Row} from "react-bootstrap";
import {ModalProvider, ModalContext} from "../../contexts/modal";
import {DefaultProps} from "../../interfaces/defaultProps";
import {ProjectFormComponent} from "./form";

export const ProjectPage: React.FC<DefaultProps> = ({...props}) => {
	const col: any = [
		{title: "Name", field: "name"},
		{title: "Surname", field: "surname"},
		{title: "Birth Year", field: "birthYear", type: "numeric"},
		{
			title: "Birth Place",
			field: "birthCity",
			lookup: {34: "İstanbul", 63: "Şanlıurfa"},
		},
	];

	const data: any = [
		{
			name: "Mehmet",
			surname: "Baran",
			birthYear: 1987,
			birthCity: 63,
		},
		{
			name: "Mehmet",
			surname: "Baran",
			birthYear: 1987,
			birthCity: 63,
		},
		{
			name: "Mehmet",
			surname: "Baran",
			birthYear: 1987,
			birthCity: 63,
		},
		{
			name: "Mehmet",
			surname: "Baran",
			birthYear: 1987,
			birthCity: 63,
		},
		{
			name: "Zerya Betül",
			surname: "Baran",
			birthYear: 2017,
			birthCity: 34,
		},
	];

	return (
		<>
			<ModalProvider>
				<Row className="pt-5">
					<Col md={{span: 12}} lg={{span: 12}} sm={{span: 12}} xs={{span: 12}}>
						<MaterialTable
							components={{
								Toolbar: (props) => (
									<div style={{backgroundColor: "#e8eaf5"}}>
										<MTableToolbar {...props} />
										<AddButton />
									</div>
								),
							}}
							title="Simple Action Preview"
							columns={col}
							data={data}
							actions={[
								{
									icon: "save",
									tooltip: "Save User",
									onClick: (event, rowData) => alert("You saved " + rowData),
								},
							]}
						/>
					</Col>
				</Row>
			</ModalProvider>
		</>
	);
};

export const AddButton: React.FC<DefaultProps> = ({...props}) => {
	let {handleModal} = React.useContext(ModalContext);
	return (
		<Container fluid>
			<Row className="justify-content-end pb-2 pt-2 pl-2 pr-4">
				<Button variant={"primary"} onClick={() => handleModal(<ProjectFormComponent />)}>
					Add New
				</Button>
			</Row>
		</Container>
	);
};
