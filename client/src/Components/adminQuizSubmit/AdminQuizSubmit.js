import React,{useState} from 'react'
import Axios from 'axios';

function AdminQuizSubmit() {
    const [quizImage, setQuizImage] = useState('');
    const [quizName, setQuizName] = useState('');
    const [quizCategory, setQuizCategory] = useState('');

    const submitQuiz = () => {
        Axios.post("http://localhost:2000/api/quizzes", {
        quizImage: quizImage, 
        quizName: quizName,
        quizCategory: quizCategory
        })
    };

    return (
        <div className='admin-quiz-submit'>
            <h1>Quiz Submit</h1>
            <div className='form'>
                <label>Quiz Image</label>
                <input type='text' name='quizImage' onChange={(e) => setQuizImage(e.target.value)}/>
                <label>Quiz Name</label>
                <input type='text' name='quizName' onChange={(e) => setQuizName(e.target.value)}/>
                <label>Quiz Category</label>
                <input type='text' name='quizCategory' onChange={(e) => setQuizCategory(e.target.value)}/>

                <button onClick={submitQuiz}>Submit</button>
            </div>
        </div>
    )
}

export default AdminQuizSubmit