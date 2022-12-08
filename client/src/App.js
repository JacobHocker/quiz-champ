import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/homePage/HomePage';
import Nav from './Components/nav/Nav';
import QuizListContainer from './Components/quizListContainer/QuizListContainer';
import AdminQuizSubmit from './Components/adminQuizSubmit/AdminQuizSubmit';
import AdminQuestionSubmit from './Components/adminQuestionSubmit/AdminQuestionSubmit';

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<QuizListContainer />} path='quizzes' />
        <Route element={<AdminQuizSubmit />} path='quiz-submit' />
        <Route element={<AdminQuestionSubmit />} path='question-submit' />
      </Routes>
    </div>
  );
}

export default App;
