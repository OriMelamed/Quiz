import { useRef } from 'react'

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffeldAnswers = useRef()


    if (!shuffeldAnswers.current) {
        shuffeldAnswers.current = [...answers]
        shuffeldAnswers.current.sort(() => Math.random() - 0.5)
    }

    return (
        <div>
            <ul id="answers">
                {shuffeldAnswers.current.map((answer, index) => {
                    let cssClass = ''
                    const isSelected = selectedAnswer === answer
                    if (answerState === 'answered' && isSelected) {
                        cssClass = 'selected'
                    }
                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState
                    }
                    return (
                        < li key={index} className="answer" >
                            <button
                                onClick={() => onSelect(answer)}
                                className={cssClass}
                                disabled={answerState !== ''}
                            >
                                {answer}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
