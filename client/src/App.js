import './App.css';
import React, {useState, useEffect } from 'react';
import  Axios  from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/homePage/HomePage';
import Nav from './Components/nav/Nav';
import QuizListContainer from './Components/quizListContainer/QuizListContainer';
import AdminQuizSubmit from './Components/adminQuizSubmit/AdminQuizSubmit';
import AdminQuestionSubmit from './Components/adminQuestionSubmit/AdminQuestionSubmit';
import QuizDisplayContainer from './Components/quizDisplayContainer/QuizDisplayContainer';
import UserRegister from './Components/userRegister/UserRegister';
import UserLogin from './Components/userLogin/UserLogin';

function App() {
  const [user, setUser] = useState(null);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:2000/login").then((response) => {
      setUser(response.data.user[0])
    })
  }, [])
  return (
    <div className="App">
      <Nav user={user}/>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<QuizListContainer />} path='quizzes' />
        <Route element={<AdminQuizSubmit />} path='quiz-submit' />
        <Route element={<AdminQuestionSubmit />} path='question-submit' />
        <Route element={<QuizDisplayContainer />} path='quiz/:id' />
        <Route element={<UserRegister />} path='register' />
        <Route element={<UserLogin user={user} setUser={setUser}/>} path='login' />
      </Routes>
    </div>
  );
}

export default App;
