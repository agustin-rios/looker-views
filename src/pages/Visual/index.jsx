import { useState } from 'react'
import '../../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, login, logout } from '../../redux/authSlice';

import { sdk } from '../../helpers/EmbedInit';

  
export const Home = () => {
    const dispatch = useDispatch();
  
    const auth = useSelector(selectAuth);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        dispatch(login());
        setLoggedIn(true);
    }

    const handleLogout = () => { 
        dispatch(logout());
        setLoggedIn(false);
    }
  
    return (
      <div>
        <h1>DHome</h1>
        <div className="card">
          {loggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            // if user is not logged in, show login button
            <button onClick={handleLogin}>Login</button>
          )}
          <h2>Auth state</h2>
          <pre>{JSON.stringify(auth, null, 2)}</pre>
        </div>
      </div>
    );
  }