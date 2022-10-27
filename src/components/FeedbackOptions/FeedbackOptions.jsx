import { Button, Container, List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {

  return (
    <Container>
      {options.map((option, index) => (
        <List key={index}>
          <li>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </li>
        </List>
      ))}
      ;
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
