import type React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return <a href={href} target='_blank' rel='noopener noreferrer' className={styles.button}>
    {children}
  </a>
};
