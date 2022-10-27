import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppStyle } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

import PropTypes from 'prop-types';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };



  function onLeaveFeedback(feedbackType) {
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

function countTotalFeedback() {
    const total = Object.values(feedbackOptions);
    return total.reduce((a, b) =>{
        return a + b;
      });
  }


  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const positevePercent = (feedbackOptions.good / total) * 100;
    return Math.round(positevePercent);
  }

  return (
    <AppStyle>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(feedbackOptions)}
        ></FeedbackOptions>
      </Section>

      <Section title={'Statistics'}>
        <Notification total={countTotalFeedback()}></Notification>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </AppStyle>
  );
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
