import React from 'react'
import './Header.css'

export default function Header() {

    const now = new Date()

  return (
    <header>
        <h3>Logo</h3>

        <span>время сейчас : {now.toLocaleDateString()} </span>

    </header>
    
  )
}
