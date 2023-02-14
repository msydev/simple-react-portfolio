import React from 'react'

function Circle({progress}) {
  return (
    <svg viewBox="0 0 36 36" fill='none' width="56" height="56">
        
        <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" />
      <stop offset={`${progress}%`} stopColor="#c026d3" />
    </linearGradient>
  </defs>
        <path 
        fill='rgba(255, 255, 255, 0.1)'
        strokeWidth={2}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path 
        className='glow'
        stroke='url(#gradient)'
        strokeWidth={2}
        strokeDasharray={`${progress},100`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
  )
}

export default Circle