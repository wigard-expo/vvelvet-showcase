import { useState } from 'react';
import type React from 'react';

import styles from './tape.module.scss';
import tapeImg from '../../assets/images/tape.png';

export const Tape: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return <div className={styles.wrapper}>
    <div
      className={styles.tape}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={tapeImg} alt='' />
    </div>
    {showTooltip && <div className={styles.tooltip}>
      <div className={styles.tooltip_title}>⚠️ Warning</div>
      <div className={styles.tooltip_desc}>This is a portfolio showcase project. All&nbsp;events, dates and venues are fictional.</div>
    </div>}
  </div>
};
