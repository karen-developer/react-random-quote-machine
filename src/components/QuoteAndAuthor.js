import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div id="quote-box" className="card shadow mb-5 bg-white rounded w-75 p-3 mx-auto" >

            <div className="card-body">
            
                <h2 className="text-info text-center p-2"><i class="fas fa-quote-left"></i></h2>
                <h4 id="text" class="card-text p-4">"{quote.quote}"</h4>
                <h6 id="author" className="card-title text-center font-italic p-2">- {quote.author} -</h6>

                <p id="tweet-quote" className="btn btn-info"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent('"' + quote.quote +'"' + ' — ' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i></p>

                <p id="new-quote" className="btn btn-info float-right pulse"
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-angle-double-right"></i></p>            
            </div>
        </div>
    )
}
