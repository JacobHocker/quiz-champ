import React, {useState, useContext} from 'react';
import { QuizContext } from '../../Helpers/Contexts';

function QuizPlay({questionList}) {
    const { score, setScore, setQuizState } = useContext(QuizContext)

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    

    const finishQuiz = () => {
        if (questionList[currQuestion].correctAnswer === optionChosen) {
            setScore(score + 1)
        }
        setQuizState("end")
    }
    const nextQuestion = () => {
        if (questionList[currQuestion].correctAnswer === optionChosen) {
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
    }
    return (
        <div className='quiz-question-container'>
            <h1>{questionList[currQuestion].questionContent}</h1>
            <div className='quiz-choice-container'>
                <button onClick={() => setOptionChosen(questionList[currQuestion].choiceOne)}>{questionList[currQuestion].choiceOne}</button>
                <button onClick={() => setOptionChosen(questionList[currQuestion].choiceTwo)}>{questionList[currQuestion].choiceTwo}</button>
                <button onClick={() => setOptionChosen(questionList[currQuestion].choiceThree)}>{questionList[currQuestion].choiceThree}</button>
                <button onClick={() => setOptionChosen(questionList[currQuestion].choiceFour)}>{questionList[currQuestion].choiceFour}</button>
            </div>


            {currQuestion === questionList.length - 1 ? 
                <button onClick={finishQuiz}>Finish Quiz</button>
                :
                <button onClick={nextQuestion}>Next Question</button>
            }
        </div>
    )
}

export default QuizPlay