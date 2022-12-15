import React, {useState} from 'react';
import './AdminQuestionSubmit.css';
import Axios from 'axios';

function AdminQuestionSubmit() {
    const [quizId, setQuizId] = useState(0);
    const [questionContent, setQuestionContent] = useState('');
    const [questionImage, setQuestionImage] = useState('');
    const [choiceOne, setChoiceOne] = useState('');
    const [choiceTwo, setChoiceTwo] = useState('');
    const [choiceThree, setChoiceThree] = useState('');
    const [choiceFour, setChoiceFour] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const submitQuestion = () => {
        Axios.post("http://localhost:2000/api/post/questions", {
        quizId: quizId, 
        questionContent: questionContent,
        questionImage: questionImage,
        choiceOne: choiceOne,
        choiceTwo: choiceTwo,
        choiceThree: choiceThree,
        choiceFour: choiceFour,
        correctAnswer: correctAnswer
        })
    };
    
    return (
        <div>
            <h1>Question Submit</h1>
            <div className='admin-form'>
                <label>Quiz Id</label>
                <input type='number' name='quizId' onChange={(e) => setQuizId(e.target.value)}/>
                <label>Question Content</label>
                <input type='text' name='questionContent' onChange={(e) => setQuestionContent(e.target.value)}/>
                <label>Question Image</label>
                <input type='text' name='questionImage' onChange={(e) => setQuestionImage(e.target.value)}/>
                <label>Choice One</label>
                <input type='text' name='choiceOne' onChange={(e) => setChoiceOne(e.target.value)}/>
                <label>Choice Two</label>
                <input type='text' name='choiceTwo' onChange={(e) => setChoiceTwo(e.target.value)}/>
                <label>Choice Three</label>
                <input type='text' name='choiceThree' onChange={(e) => setChoiceThree(e.target.value)}/>
                <label>Choice Four</label>
                <input type='text' name='choiceFour' onChange={(e) => setChoiceFour(e.target.value)}/>
                <label>Correct Answer</label>
                <input type='text' name='correctAnswer' onChange={(e) => setCorrectAnswer(e.target.value)}/>
                <button onClick={submitQuestion}>Submit</button>
            </div>
        </div>
    )
}

export default AdminQuestionSubmit