import './style.css';
import { useState } from 'react';

//with destructuring
function Greeting({ name }) {
  const [counter, setCounter] = useState(0);
  console.log(name);
  return (
    <p onClick={() => setCounter(counter + 1)}>
      Hi, {name} {counter}
    </p>
  );
}

//without destructuring
function IndianGreeting(props) {
  console.log('From Indian Greeting', props);
  return <p>Namaste, {props.name}</p>;
}

function Parent({ children }) {
  console.log(children);
  return (
    <div style={{ padding: '1rem', backgroundColor: '#efefef' }}>
      <p>Hi, I am Parent!</p>
      <p>This is my child</p>
      {children}
      {/* <p>This is my first child</p>
      {children[0]}
      <p>This is my second child</p>
      {children[1]} */}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ react props</h1>
      <Greeting name="Priyanka" />
      {/* <IndianGreeting name="Ira" /> */}
      <Parent>
        <IndianGreeting name="Ira" />
        {/* <Greeting name="Priyanka" /> */}
      </Parent>
    </div>
  );
}
