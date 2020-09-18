import React, {useReducer} from "react";
import {createAction} from "../../utils/createAction";

const useProject = () => {
	const actions = React.useMemo(
		() => ({
			handleModal: async (bool: boolean) => {
				dispatch(createAction("SHOW_MODAL", bool));
			},
		}),
		[]
	);

	const [state, dispatch] = useReducer(
		(state: any, action: any) => {
			switch (action.type) {
				case "SHOW_MODAL":
					return {
						...state,
						modal: action.payload,
					};
				case "HIDE_MODAL":
					return {
						...state,
						modal: action.payload,
					};
				default:
					return state;
			}
		},
		{
			modal: false,
		}
	);

	return {
		actions,
		state,
	};
};
export default useProject;
