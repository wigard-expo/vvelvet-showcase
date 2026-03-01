import type React from 'react';
import { FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return <footer className={styles.footer}>
    <div className={styles.socials}>
      <a href='#' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
      <a href='#' target='_blank' rel='noopener noreferrer'><FaTelegramPlane /></a>
      <a href='#' target='_blank' rel='noopener noreferrer'><FaVk /></a>
    </div>
    
    <p>This is a portfolio showcase project. All&nbsp;content is fictional.</p>
    <p>&copy; 2026 Made by <a href='https://github.com/wigard-expo/vvelvet-showcase' target='_blank' rel='noopener noreferrer'>Wigard</a></p>
  </footer>
};
