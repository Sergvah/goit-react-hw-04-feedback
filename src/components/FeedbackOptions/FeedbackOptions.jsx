import React from 'react';
import css from './feedbackoptions.module.css';
import PropTypes from 'prop-types';

const Buttonfeedback = ({ options, onAddFeedback }) => (
  <div className={css.btn_block}>
    <button
      className={css.btn_item}
      type="button"
      onClick={() => onAddFeedback(options[0])}
    >
      Good
    </button>
    <button
      className={css.btn_item}
      type="button"
      onClick={() => onAddFeedback(options[1])}
    >
      Neutral
    </button>
    <button
      className={css.btn_item}
      type="button"
      onClick={() => onAddFeedback(options[2])}
    >
      Bad
    </button>
  </div>
);
export default Buttonfeedback;
Buttonfeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
