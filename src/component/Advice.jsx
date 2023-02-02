import React from 'react';
import DividerMobile from '../../src/assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../../src/assets/images/pattern-divider-desktop.svg';
import DiceIcon from '../../src/assets/images/icon-dice.svg';
import styles from '../component/Advice.module.css';

const Advice = props => {
  return (
    <div className="container">
      <div className={styles['card']}>
        <h2>advice #{props.advice.id}</h2>
        <p>&ldquo;{props.advice.advice}&rdquo;</p>
        <picture>
          <source media="(min-width: 48em)" srcSet={DividerDesktop}></source>
          <img
            className={styles['divider-img']}
            src={DividerMobile}
            alt=""
          ></img>
        </picture>
        <button
          className={styles['random-btn']}
          onClick={props.fetchAdviceHandler}
          aria-label="generate random quote"
        >
          <img src={DiceIcon} alt="Generate random quote"></img>
        </button>
      </div>
    </div>
  );
};

export default Advice;
