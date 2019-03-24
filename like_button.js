import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, counter: 0 };
    this.setLiked = this.setLiked.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  setLiked() {
    this.setState({ liked: true });
  }

  incrementCounter() {
    var count = this.state.counter;
    count = count + 1;
    this.setState({ counter: count });
  }

  render() {

    if(this.state.counter === 0) {
      return (
        <button onClick={this.incrementCounter}> Like </button>
  
      );
    } else {
      return (

        <div>
  
          <button onClick={this.incrementCounter}> Like </button>
  
          <p> You liked this ({this.state.counter}) </p>
  
        </div>
  
      );
    }
    
  }
}

ReactDOM.render(<LikeButton />, document.getElementById('like_button_container'));