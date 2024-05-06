import React, { useCallback, useState } from 'react'
import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'
import Question from './Question'
import Summary from './Summary'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (quizIsComplete) {
        return <Summary />
    }


    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSkipAnswer={handleSkipAnswer}
                onSelectAnswer={handleSelectedAnswer}
            />
        </div >
    )
}
