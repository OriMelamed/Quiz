import { useState, useEffect } from "react"

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(() => {
        console.log("timeout")
        const timer = setTimeout(onTimeout, timeout)
        return () => { clearTimeout(timer) }
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log("interval")
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
        }, 20)
        return () => { clearInterval(interval) }
    }, [])

    return (
        <progress id="question-timer" max={timeout} value={remainingTime} className={mode} />
    )
}
