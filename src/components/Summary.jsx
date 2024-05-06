import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null).length
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length
    const incorrectAnswers = userAnswers.filter((answer, index) => answer !== null && answer !== QUESTIONS[index].answers[0]).length

    const percentageSkipped = Math.round((skippedAnswers / QUESTIONS.length) * 100)
    const percentageCorrect = Math.round((correctAnswers / QUESTIONS.length) * 100)
    const percentageIncorrect = Math.round((incorrectAnswers / QUESTIONS.length) * 100)

    return (
        <div id="summary">
            <img src={quizCompleteImage} alt="quiz complete" />
            <h2>Quiz Complete!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{percentageSkipped}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{percentageCorrect}%</span>
                    <span className='text'>Answerd Correct</span>
                </p>
                <p>
                    <span className='number'>{percentageIncorrect}%</span>
                    <span className='text'>Answerd Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'

                    if (answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
