import react, {useState} from 'react'
import QuoteBox from './QuoteBox'
import quotes from './quotes'
import './style.css'

function App() {
  const randomValue = Math.floor(Math.random() * quotes.length);
  const [chosenQuote, setChosenQuote] = useState(quotes[randomValue]);
  const [color, setColor] = useState("#ffffff");

  return (
          <QuoteBox quote={chosenQuote} setQuote={setChosenQuote} />
  )
}

export default App
