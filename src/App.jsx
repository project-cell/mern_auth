import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";//importing
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Header from './components/header.jsx';



export default function App() {
  return <BrowserRouter >
  {/*header*/}
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
  </BrowserRouter>;
}

