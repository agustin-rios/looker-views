
import '../../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, login, logout } from '../../redux/authSlice';

  
export const Home = () => {
    const dispatch = useDispatch();
  
    const auth = useSelector(selectAuth);
  
    return (
      <div>
        <h1>DHome</h1>
        <div className="card">
          <button onClick={() => dispatch(login({name: 'John Doe'}))}>Login</button>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <h2>Auth state</h2>
          <pre>{JSON.stringify(auth, null, 2)}</pre>
        </div>
      </div>
    );
  }