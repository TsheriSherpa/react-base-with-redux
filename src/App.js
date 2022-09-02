import React from 'react'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/reducers/counterReducer'
import { success, error, clear } from './redux/reducers/alertReducer';
import { Alert } from 'react-bootstrap';

import {
	Link,
	BrowserRouter as Router,
} from "react-router-dom";

import AppRoutes from './router/router';

function App() {
	return (
	 	 <div className='App'>
			<Router>
				<Navbar/>
				<AppRoutes/>
			</Router>
		</div>
  	);
}

function Navbar() {
	return (
		<div style={{ display: "flex", justifyContent: "space-around", alignContent: "center"}}>
				<Link to='/public'>
					Public Page
				</Link>
				<Link to='/protected'>
					Protected Page
				</Link>
				<Link to='/login'>
					Login Page
				</Link>
		</div>
	 );
	}

export default App;
