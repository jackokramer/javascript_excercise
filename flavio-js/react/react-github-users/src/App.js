import './App.css';
import React, { useState } from 'react'
import logo from './logo.svg'
import Form from "./components/Form"
import CardList from "./components/CardList"

function App() {
  const [cards, setCards] = useState([])
  const addNewCard = (card) => {
    setCards([...cards, card])
  }
  return (
    <div >
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extra-bold text-gray-900">
        Search GitHub User</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
