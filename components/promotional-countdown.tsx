"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: Date
  className?: string
}

export default function PromotionalCountdown({ targetDate, className = "" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="text-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
        <span className="block text-xl font-bold">{timeLeft.days}</span>
        <span className="text-xs text-white/80">Days</span>
      </div>
      <div className="text-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
        <span className="block text-xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs text-white/80">Hours</span>
      </div>
      <div className="text-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
        <span className="block text-xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs text-white/80">Mins</span>
      </div>
      <div className="text-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
        <span className="block text-xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs text-white/80">Secs</span>
      </div>
    </div>
  )
}
