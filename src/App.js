import React, { useState } from 'react'
import FlashCardList from './FlashCardList'

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashCardList flashcards={flashcards} />
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      "2","3","4","5"
    ]
  },
  {
    id: 2,
    question: "What is 2 + 3?",
    answer: "5",
    options: [
      "2","3","4","5"
    ]
  },
  {
    id: 3,
    question: "What is 1 + 2?",
    answer: "4",
    options: [
      "2","3","4","5"
    ]
  }

]
export default App
