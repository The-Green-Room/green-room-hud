import React from 'react'
import quoteStrings from '../utils/quotes'

class Quote extends React.Component {
  constructor() {
    super()

    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getNewQuote()

    this.intervalID = setInterval(() => {
      this.getNewQuote()
      console.log(this.intervalID)
    }, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  getNewQuote () {
    const fullQuoteText = quoteStrings[Math.floor(Math.random() * 100)]
    const authorSlice = fullQuoteText.slice(fullQuoteText.search(/ -\w[A-Za-z .\-!?]*/))
    const quoteSlice = fullQuoteText.slice(0, fullQuoteText.search(/ -\w[A-Za-z .\-!?]*/))
    delete this.state.quote; delete this.state.author
    this.setState({ ...this.state, quote: quoteSlice, author: authorSlice})

    console.log("get new quote")
  }

  render() {

    return(
      <div style={{ fontFamily: 'Lobster' }}> 
        <p style={{ fontSize: 40 }}>{this.state.quote}</p>
        <p className='text-right' style={{ fontSize: 24 }}>{this.state.author}</p>
      </div>
    )
  }
}

export default Quote