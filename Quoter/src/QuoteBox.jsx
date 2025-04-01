import React, {useState} from "react";
import quotes from "./quotes";
import './style.css'

function QuoteBox( { quote, setQuote } ) {
    const [color, setColor] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    const background = {
        backgroundColor:color
    }
    const text = {
        color:color
    }

    function handleQuoteChange() {
        const randomValue = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomValue]);
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }

    return(
        <body style={background}>
            <div id="quote-box">
                <p id="text" style={text}><i class="fa-solid fa-quote-left"></i>{quote.quote}</p>
                <p id="author"  style={text}>- {quote.author}</p>
                <div id="buttons">
                    <button id="tweet-quote" style={background}><a href="twitter.com/intent/tweet"><i class="fa-brands fa-twitter"></i></a></button>
                    <button id="new-quote" style={background} onClick={handleQuoteChange}>New Quote</button>
                </div>
            </div>
        </body>
    );
}


export default QuoteBox;