import PropTypes from 'prop-types';

export const Notification = ({ total }) => {
  return <div>{total === 0 && <p>There is no feedback.</p>}</div>;
};

Notification.propTypes = {
  total: PropTypes.number,
};
