import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';

export default class App extends Component {
	render() {
		return (
			<div>
				<Sidebar />

				<Main />
			</div>
		)
	}
}