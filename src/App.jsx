import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import './App.css'
import authService from "./appwrite/auth.js"
import { login, logout } from './store/authSlice.js';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
                .then((userData) => {
                  if (userData) {
                    dispatch(login({userData}))
                  } else {

                  }
                })
                .finally()
  }, []);

  return (
    <>
      <h1>A blog app with Appwrite</h1>
    </>
  )
}

export default App
