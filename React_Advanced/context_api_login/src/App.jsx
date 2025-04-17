import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './contexts/UserContextProvider';

export default function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
