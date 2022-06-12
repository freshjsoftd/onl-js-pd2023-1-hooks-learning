import React, {useCallback, useState } from 'react';
import './App.css';
import CallbackItems from './components/CallbackItems';
import TypeProps from './components/TypeProps';

function App() {

  const [colored, setColored] = useState(false);
	const [count, setCount] = useState(5);
  
	const styles = {
		color: colored ? 'red' : 'green',
	}

  const createItems = useCallback(() => {
    return new Array(count).fill('').map((el, index) => `Element #${index + 1}`)
  }, [count]) 
  // // Non memoized function
  // const createItems = () => {
  //   return new Array(count).fill('').map((el, index) => `Element #${index + 1}`)
  // }
	

	return (
		<>
			<div className='app'>
				<h1 style={styles}>Compute property: {count}</h1>
				<button onClick={() => setCount((prev) => prev + 1)}>
					Plus
				</button>
				<button
					onClick={() => setColored((prev) => !prev)}>
					Change Color
				</button>
				<TypeProps
					count={2}
					func={() => console.log('functionProp')}
					// string={'It is string'}
					bool={true}
				/>
        <CallbackItems getItems={createItems}/>
			</div>
		</>
	);
}

export default App;
