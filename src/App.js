import React, { Component } from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

export default class App extends Component {

  // State
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author
  }

  // Generate different quote function
  generateRandomQuote = (arr) => {
    // Get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    // Update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)

  }

  // Shuffle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center"><i class="fas fa-quote-left"></i> Random Quote Machine <i class="fas fa-quote-right"></i></h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    )
  }
}