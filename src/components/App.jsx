import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() >= 1) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackGiven = good === 0 && neutral === 0 && bad === 0;

    return (
      <>
        <Section title="Feedback App">
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </Section>

        {feedbackGiven ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
