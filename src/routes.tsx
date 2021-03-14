import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Success } from "./pages/Success";
import { Home } from "./pages/Home";

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<Route path="/success" component={Success} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
