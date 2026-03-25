'use client'

import { useEffect, useRef, useState } from 'react'

interface ProgressBarProps {
  progress: number
  color?: 'red' | 'green'
}

export default function ProgressBar({ progress, color = 'red' }: ProgressBarProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setWidth(progress))
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [progress])

  return (
    <div ref={ref} className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${
          color === 'red' ? 'bg-brand-red' : 'bg-brand-green'
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
