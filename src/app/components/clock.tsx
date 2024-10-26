'use client'

import { useState, useEffect } from 'react'

const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const updateTime = () => setTime(new Date())

        const delay = 1000 - (Date.now() % 1000)
    
        const timeoutId = setTimeout(() => {
            updateTime()

            const intervalId = setInterval(updateTime, 1000)

            return () => clearInterval(intervalId)
        }, delay)
    
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <div className='h-full px-2 flex items-center justify-center sm:hover:bg-white/10 active:bg-white/10'>
            <h1 className='text-white text-xs pointer-events-none'>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</h1>
        </div>
    )
}

export default Clock