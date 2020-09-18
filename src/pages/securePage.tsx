import * as React from "react";
import {Redirect, Route, RouteProps, useLocation} from "react-router";
import LocalStorage from "../helpers/localstorage";

export interface ProtectedRouteProps extends RouteProps {}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({...rest}) => {
	const {expiredToken} = LocalStorage();
	const currentLocation = useLocation();
	const redirectPath: any = rest.path;

	if (redirectPath !== currentLocation.pathname) {
		const renderComponent = () => <Redirect to={{pathname: redirectPath}} />;
		return <Route {...rest} component={renderComponent} />;
	} else {
		return <Route {...rest} />;
	}
};

export default ProtectedRoute;
