import React, { useContext } from 'react'
import { QuizContext } from '../../Helpers/Contexts'


function QuizStartMenu() {
    const { setQuizState } = useContext(QuizContext)
    
    return (
        <div className='quiz-menu'>
        
            <button onClick={() => { setQuizState("play")}}>Start Quiz</button>
        </div>
    )
}

export default QuizStartMenu