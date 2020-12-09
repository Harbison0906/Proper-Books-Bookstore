//@ts-nocheck
import * as React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Compose from './views/Compose'
import Details from './views/Details'
import Admin from './views/Admin'
import Register from './views/Register'
import Login from './views/Login'
import JumboNav from './components/JumboNav';
import Form from './components/Form'
import { StripeProvider, Elements } from 'react-stripe-elements'
import Email from './components/Email';

export default class App extends React.Component {

	render() {
		return (

			<BrowserRouter>

				<JumboNav />

				<>
					<StripeProvider apiKey="pk_test_51HhhpgCIQyjsczhxyCoiCtp2xSSEl83gYqOzk1SJjEGa7J9BGnTX9xF10CUmKHceL3kPohjAsJ99WhcYDORVGCgK00CPeKZ1tP">
						<Elements>
							<Form />
						</Elements>
					</StripeProvider>
				</>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/details/:bookid" component={Details} />
					<Route exact path="/compose" component={Compose} />
					<Route exact path="/admin/:bookid" component={Admin} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Switch>

				<Email />

			</BrowserRouter>
		)
	}

}


