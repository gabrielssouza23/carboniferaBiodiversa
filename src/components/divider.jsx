import React from 'react'

export default function Divider({ centered }) {
  return (
    <div className={`w-2/3 sm:w-1/3 h-px bg-custom-green ${centered ? 'm-auto' : ''}`} />
  )
}
