import Proptypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => {
  return <h1 className={css.h1}>{message}</h1>;
};
export default Notification;
Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
