import React, { useState } from 'react'
import QUESTIONS from '../questions'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 2000

    if (answer.selectedAnswer) {
        timer = 2000
    }
    if (answer.isCorrect !== null) {
        timer = 2000
    }

    const handleSelectedAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            setTimeout(() => {
                onSelectAnswer(answer)
            }, 1500)
        }, 1000)
    }

    let answerState = ''

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[index].text}</h2>
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState}
            />
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectedAnswer}
            />
        </div>
    )
}
