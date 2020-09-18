import {createContext} from "react";

export interface ProjectContextInterface {
	modal: boolean;
	state?: any;
	actions?: any;
}

export const initialProjectInterface: ProjectContextInterface = {modal: false};

export const ProjectContext = createContext<ProjectContextInterface>(
	initialProjectInterface
);
