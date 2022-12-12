import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import {useParams} from 'react-router-dom';

function QuizContainer() {
    const [quiz, setQuiz] = useState({});
    const [questionList, setQuestionList] = useState([]);

    let {id} = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:2000/api/get/quiz/${id}`)
        .then((r) => setQuiz(r))
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:2000/api/get/questions/${id}`)
        .then((r) => setQuestionList(r))
    }, [])
    console.log(questionList)
    
    return (
        <div>
            {quiz.data && quiz.data.map((val) => (
                <div key={val.id}>
                    <h1>{val.quizName}</h1>
                    <img src={val.quizImage} alt={val.quizName} />
                    <h2>Category: {val.quizCategory}</h2>
                    <p>{val.quizDescription}</p>
                </div>
            ))}
            
        </div>
    )
}

export default QuizContainer