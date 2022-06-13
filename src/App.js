import React from 'react';
import './App.css';
import Alert from './components/alert/Alert';
import AlertProvider from './components/alert/AlertProvider';
import Main from './components/Main';

function App() {

	return (
		<AlertProvider>
			<div className='container pt-3'>
				<Alert />
				<Main/>
			</div>
		</AlertProvider>
	);
}

export default App;
