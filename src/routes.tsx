import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;