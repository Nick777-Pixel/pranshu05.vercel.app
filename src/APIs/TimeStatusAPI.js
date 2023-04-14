import React, { useEffect, useState } from 'react'

export const TimeStatus = () => {
    const [time, setTime] = useState('')
    const [activity, setActivity] = useState('💻')
    const [activityTitle, setActivityTitle] = useState('Coding')

    function updateTime() {
        let current = new Date().toLocaleString('en-In', {
            timeZone: 'Asia/Kolkata',
        })
        let timeString = `${current.slice(-11, -3)} ${current
            .slice(-2)
            .toUpperCase()}`
        setTime(timeString)
        setTimeout(updateTime, 1000)

        let hour = new Date().getHours()
        if (hour < 7 || hour >= 21) {
            setActivity('💤') // Sleep time or coding time
            setActivityTitle('Sleeping')
        } else if (hour === 7) {
            setActivity('🍳') // Breakfast time
            setActivityTitle('Having Breakfast')
        } else if (hour >= 8 && hour < 12) {
            setActivity('📚') // Studying time
            setActivityTitle('Morning Study (In a Lecture)')
        } else if (hour === 12) {
            setActivity('🍱') // Lunch time
            setActivityTitle('Having Lunch')
        } else if (hour >= 13 && hour < 20) {
            setActivity('📚') // Studying time
            setActivityTitle('Evening Study')
        } else if (hour === 20) {
            setActivity('🍽️') // Dinner time
            setActivityTitle('Having Dinner')
        } else {
            setActivity('💻') // Coding time
            setActivityTitle('Coding')
        }
    }

    useEffect(() => {
        updateTime()
    })

    return (
        <div className="time">
            <p>
                {activity}{' '}
                <small>
                    <span title={activityTitle}>{activityTitle}</span>
                </small>{' '}
                {new Date().toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}{' '}
                • {time}
            </p>
        </div>
    )
}
