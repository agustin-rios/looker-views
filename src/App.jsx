import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, login, logout } from './redux/authSlice';

function App() {
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(login({name: 'John Doe'}))}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <h2>Auth state</h2>
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
