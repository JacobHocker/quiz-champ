import React, {useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
function QuizEndScreen({questionList}) {

    const { score } = useContext(QuizContext)
    return (
        <div>
            <h1>Quiz Finished</h1>
            <h3>{score} / {questionList.length}</h3>
        </div>
    )
}

export default QuizEndScreen