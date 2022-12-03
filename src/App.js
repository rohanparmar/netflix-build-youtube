import React, {useEffect} from 'react';
import HomeScreen from "./screens/HomeScreen";
import './App.css';
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {HashRouter, Routes, Route,} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  // const user = null;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <HashRouter>
        {!user ? (
          <LoginScreen />
        ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </HashRouter>
    </div>
  );
}

export default App;
