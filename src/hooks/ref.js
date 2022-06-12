import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import TypeProps from './components/TypeProps';

// let rCount = 1;

function App() {

  const [test, setTest] = useState('test');

  const rCount = useRef(1);
  const fieldRef = useRef(null);
  const lastState = useRef('');


  useEffect(() => {
    rCount.current++;
    // console.log(fieldRef.current.value);
  })

  useEffect(() => {
    lastState.current = test;
  }, [test])

  const handlerFocus = () => fieldRef.current.focus();
  return (
    <div className="app">
      <h1>Number of render : <span>{rCount.current}</span></h1>
      <h2>Last state: {lastState.current}</h2>
      <input 
          ref={fieldRef}
          type="text" 
          onChange={e => setTest(e.target.value)} 
          value={test}
          />
      <button onFocus={handlerFocus}>Focus</button>
      <TypeProps 
        count={rCount.current}
        func={() => console.log('functionProp')}
        // string={'It is string'}
        bool={true}
      />
    </div>
  )
}

export default App