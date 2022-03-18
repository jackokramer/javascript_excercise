import './App.css';
import Header from './components/Header.js';
import Card from './components/Card';
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  const cards = data.map(item => {
    return(
      <Card
      key={item.id}
      {...item}
        />
    )
  })
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
