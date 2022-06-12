import React from 'react';
import './App.css';
import Alert from './components/alert/Alert';
import AlertProvider from './components/alert/AlertContext';
import Main from './components/Main';

function App() {

	return (
		<AlertProvider value={alert}>
			<div className='container pt-3'>
				<Alert />
				<Main toggle={() => {}}/>
			</div>
		</AlertProvider>
	);
}

export default App;
