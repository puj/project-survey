import React from 'react'
import Survey from './Survey.js'

export const App = () => {
  return (
    <section className="wrapper-section">
      <h1>Rank your favorite game genres: </h1>
      <p>Click the genre to move it up to the top!</p>
      <p>Star the genres you play the most.</p>
      <Survey />
    </section>
  )
}
