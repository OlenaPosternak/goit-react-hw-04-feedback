import {StatisticsList} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>{total !== 0 && 
        <StatisticsList>
          <li>Good: {good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </StatisticsList>}</>

  );
};

Statistics.protoType = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number,
}
