import React, { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statisctics/Statisctics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = value;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = value;
    if (good === 0) return 0;
    return Number(((good / countTotalFeedback()) * 100).toFixed());
  };

  const onLeaveFeedback = event => {
    const option = event.target.textContent.toLowerCase();
    setValue(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = value;
  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(value)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={`${countPositiveFeedbackPercentage()}%`}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
