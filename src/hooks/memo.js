import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import TypeProps from './components/TypeProps';

function freezeCompute(numb, pause) {
	console.log('Is frozen');
	let start = new Date().getTime();
	let end = start;
	while (end < start + pause) {
		end = new Date().getTime();
	}
	return numb * 2;
}

function App() {

	const [numb, setNumb] = useState(20);
  // Add Add another one state 
	const [colored, setColored] = useState(false);

  // Needs round brackets otherwise
  // curve brackets can be missunderstood.
	const styles = useMemo(() => ({
		color: colored ? 'red' : 'green',
	}), [colored])

	useEffect(() => {
		console.log('Styles have been changed');
	}, [styles]);

	const pause = 1000;
  // Cashed freeze in useMemo with dependency only from numb
	const calculated = useMemo(() => freezeCompute(numb, pause), [numb]);

	return (
		<>
			<div className='app'>
				<h1 style={styles}>Compute property: {calculated}</h1>
				<button onClick={() => setNumb((prevNumb) => prevNumb + 1)}>
					Plus
				</button>
				<button onClick={() => setNumb((prevNumb) => prevNumb - 1)}>
					Minus
				</button>
        {/* Add another one action */}
				<button
					onClick={() => setColored((prevColored) => !prevColored)}>
					Change Color
				</button>
				<TypeProps
					count={2}
					func={() => console.log('functionProp')}
					// string={'It is string'}
					bool={true}
				/>
			</div>
		</>
	);
}

export default App;
