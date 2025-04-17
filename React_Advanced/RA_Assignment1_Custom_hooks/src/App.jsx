import { useCounter } from '../customHooks/useCounter';
import { useToggle } from '../customHooks/useToggle';
import { useFetch } from '../customHooks/useFetch';
import { useLogger } from '../customHooks/useLogger';
import { useLocalStorage } from '../customHooks/useLocalStorage';

function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function ToggleSwitch() {
  const { value, toggle } = useToggle(false);
  return (
    <div>
      <h1>Current State: {value ? 'True' : 'False'}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// function UserList2() {
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/todos?_limit=2"
//   );
//   // console.log(data);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   return (
//     <>
//       <h2>Second Component</h2>
//       <ul>
//         {data?.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

function LoggerComponent() {
  const { value, setValue } = useLogger('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}

function LocalStorageComponent() {
  const { value, setValue } = useLocalStorage('inputValue', '');

  return (
    <div>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Stored value: {value}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter />
      <ToggleSwitch />
      <UserList />
      {/* <UserList2 /> */}
      <LoggerComponent />
      <LocalStorageComponent />
    </div>
  );
}
