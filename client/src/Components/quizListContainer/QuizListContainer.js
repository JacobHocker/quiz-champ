import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function QuizListContainer() {

    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:2000/api/get/quizzes")
        .then((r) => setQuizList(r.data))
    }, [])

    return (
        <div>
            
            <h1>Quiz List</h1>
            {quizList.map((val) => (
                <a href={`quiz/${val.id}`} key={val.id}>
                    <div>
                        <img src={val.quizImage} alt={val.quizName} />
                        <h1>{val.quizName} | Quiz #: {val.id}</h1>
                        <h3>Category: {val.quizCategory}</h3>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default QuizListContainer