import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged In</h1>;
  return (
    <div>
      <h2>Profile: {user.username}</h2>
    </div>
  );
}
