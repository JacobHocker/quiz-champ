import React from 'react'
import {useState, useEffect} from 'react';
import Axios from 'axios';

function Home() {

    const [quizImage, setQuizImage] = useState('');
    const [quizName, setQuizName] = useState('');
    const [quizCategory, setQuizCategory] = useState('');
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:2000/api/get/quizzes")
        .then((r) => setQuizList(r.data))
    }, [])

    const submitQuestion = () => {
        Axios.post("http://localhost:2000/api/quizzes", {
        quizImage: quizImage, 
        quizName: quizName,
        quizCategory: quizCategory
        })

        setQuizList([...quizList, 
            {quizImage: quizImage, quizName: quizName, quizCategory: quizCategory}
        ])
    };
    return (
        <div>
            <h1>Quiz Champ</h1>
            <div className='form'>
                <label>Quiz Image</label>
                <input type='text' name='quizImage' onChange={(e) => setQuizImage(e.target.value)}/>
                <label>Quiz Name</label>
                <input type='text' name='quizName' onChange={(e) => setQuizName(e.target.value)}/>
                <label>Quiz Category</label>
                <input type='text' name='quizCategory' onChange={(e) => setQuizCategory(e.target.value)}/>

                <button onClick={submitQuestion}>Submit</button>

                {quizList.map((val) => (
                    <div key={val.id}>
                    <img src={val.quizImage} alt={val.quizName} />
                    <h1>{val.quizName} | Quiz #: {val.id}</h1>
                    <h3>Category: {val.quizCategory}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home