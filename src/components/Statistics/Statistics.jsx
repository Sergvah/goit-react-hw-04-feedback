import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Listoffeedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.statistics_list}>
    <li className={css.statistics_item}>Good: {good}</li>
    <li className={css.statistics_item}>Neutral: {neutral}</li>
    <li className={css.statistics_item}>Bad: {bad}</li>
    <li className={css.statistics_item}>Total: {total}</li>
    <li className={css.statistics_item}>
      Positive feedback: {total === 0 ? '0' : Math.round(positivePercentage)}%
    </li>
  </ul>
);
Listoffeedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Listoffeedback;
