import { Component } from 'react';
import { Notification } from './Notification/Notification';

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

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() >= 1) {
      return (this.state.good / this.countTotalFeedback()) * 100;
    } else {
      return 0;
    }
  }

  render() {
    const { good, neutral, bad, feedbackGiven } = this.state;

    return (
      <>
        <h2>Feedback App</h2>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>

        {feedbackGiven ? (
          <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback:
              {Math.round(this.countPositiveFeedbackPercentage())}%
            </p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
