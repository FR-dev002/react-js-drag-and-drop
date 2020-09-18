import React from "react";
import {Router} from "react-router-dom";
import {Route} from "react-router";

import NavbarComponent from "./components/layouts/navbar";
import {Container} from "react-bootstrap";
import {LoginPage, RegisterPage} from "./pages/auth";
import {HomePage, LoadingPage, ProjectPage} from "./pages";
import history from "./helpers/history";
import {AuthContext} from "./contexts/authContext";
import useAuth from "./hooks/auth/useAuth";
import {ProtectedRoute} from "./pages/securePage";

export default () => {
	const {actions, state} = useAuth();

	const renderRouter = () => {
		if (state.loading) {
			return <Route exact path="/" component={LoadingPage} />;
		}

		if (state.user) {
			return (
				<>
					<ProtectedRoute exact path="/" component={HomePage} /> ;
					<ProtectedRoute path="/project" component={ProjectPage} /> ;
				</>
			);
		} else {
			return (
				<>
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
				</>
			);
		}
	};

	return (
		<Container fluid>
			<AuthContext.Provider value={actions}>
				<Router history={history}>
					<NavbarComponent auth={state} />
					{renderRouter()}
				</Router>
			</AuthContext.Provider>
		</Container>
	);
};
