import React, {useState} from "react"
import './App.css';
import Form from './components/form.js'
import CardList from './components/CardList.js'

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = (card) =>{
    setCards ([...cards, card])
  }

  return (
    <div>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search GitHub User
        </h1>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} />
    </div>
  )
}

export default App;
