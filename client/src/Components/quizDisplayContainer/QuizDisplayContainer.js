import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import QuizStartMenu from '../quizStartMenu/QuizStartMenu';
import QuizPlay from '../quizPlay/QuizPlay';
import QuizEndScreen from '../quizEndScreen/QuizEndScreen';

import { QuizContext } from '../../Helpers/Contexts';

function QuizDisplayContainer() {
    const [quizState, setQuizState] = useState("menu");
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState({});
    const [questionList, setQuestionList] = useState([]);

    let {id} = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:2000/api/get/quiz/${id}`)
        .then((r) => setQuiz(r))
    }, [id])
    useEffect(() => {
        Axios.get(`http://localhost:2000/api/get/questions/${id}`)
        .then((r) => setQuestionList(r))
    }, [id])
    //console.log(questionList)
    
    return (
        <div>
            <h1>Quiz</h1>
            {quiz.data && quiz.data.map((val) => (
                <div key={val.id} className={quizState === "menu" ? 'show-quiz-menu-header' : 'hidden-quiz-menu-header'}>
                    <h1>{val.quizName}</h1>
                    <img src={val.quizImage} alt={val.quizName} />
                    <h2>Category: {val.quizCategory}</h2>
                    <p>{val.quizDescription}</p>
                    
                </div>
            ))}
            
            <QuizContext.Provider value={{ quizState, setQuizState, score, setScore}}>
                {quizState === "menu" && <QuizStartMenu />}
                {quizState === "play" && <QuizPlay questionList={questionList.data}/>}
                {quizState === "end" && <QuizEndScreen questionList={questionList.data}/>}
            </QuizContext.Provider>
        </div>
    )
}

export default QuizDisplayContainer