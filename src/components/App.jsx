import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppStyle } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positevePercent = (good / total) * 100;
    return Math.round(positevePercent);
  };

  render() {
    return (
      <AppStyle>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
          <Notification total={this.countTotalFeedback()}></Notification>

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </AppStyle>
    );
  }
}

App.propType = {
  title: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
