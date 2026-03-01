import type React from 'react';
import { Button } from '../button';
import styles from './city-card.module.scss';

interface CityCardProps {
  city: string;
  date: string;
  venue: string;
  ticketUrl: string;
}

export const CityCard: React.FC<CityCardProps> = ({ city, date, venue, ticketUrl }) => {
  return <div className={styles.city_card}>
    <div className={styles.info}>
      <span className={styles.date}>{date}</span>
      <span className={styles.city}>{city}</span>
      <span className={styles.venue}>{venue}</span>
    </div>
    <Button href={ticketUrl}>Купить билет</Button>
  </div>
};
