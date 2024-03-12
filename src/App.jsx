import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { routes } from './routes'

function App() {
  // test if .env is working
  // console.log(import.meta.env.VITE_LOOKER_HOST);
  return (
    <Router>
      <Routes>
        {
          routes.list.map(({ url, text, component, path }) => {
            return <Route key={url} path={path} element={component} />
          })
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
