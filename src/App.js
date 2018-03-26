import React, { Component } from "react";
import "./App.css";
import PT from "prop-types";

class App extends Component {
  state = {
    quotes: [
      { quote: "You know what thought did..?", author: "Joe" },
      { quote: "NO", author: "Ant" },
      { quote: "I'm just sharpening my axe.", author: "SpenceUK™️" },
      {
        quote: "You have lovely smooth hands... Do you moisturise?",
        author: "Brobbin"
      },
      { quote: "Donny was my first, true love 💕", author: "Sami" }
    ],
    currentIndex: 0
  };
  render() {
    return (
      <div className="wrapper">
        <Quote quote={this.state.quotes[this.state.currentIndex]} />
        <Button numberGenerator={this.numberGenerator} />
      </div>
    );
  }
  numberGenerator = () => {
    this.setState({
      currentIndex: Math.floor(Math.random() * this.state.quotes.length)
    });
  };
}

class Quote extends Component {
  render() {
    return (
      <div>
        <p>"{this.props.quote.quote}"</p>
        <p>- {this.props.quote.author}</p>
      </div>
    );
  }

  static propTypes = {
    quote: PT.objectOf(PT.string).isRequired
  };
}

function Button({ numberGenerator }) {
  return <button onClick={clickHandler}>New Quote</button>;

  function clickHandler(e) {
    e.preventDefault();
    numberGenerator();
  }
}

export default App;
