import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackGiven: false,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      feedbackGiven: true,
    }));
  };

  render() {
    return (
      <div>
        <h1>Feedback App</h1>
      </div>
    );
  }
}
