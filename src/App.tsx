import Home from "./Home"

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div style={{ height: '100%' }}>
				<Switch>
					<Route exact path="/" component={Home}/>
					{/* <Route component={PageNotFound}/> */}
				</Switch>
			</div>
		</Router>
	);
}