import type React from 'react';
import { CityCard } from '../city-card';
import styles from './city-list.module.scss';

interface CityItem {
  city: string;
  date: string;
  venue: string;
  ticketUrl: string;
}

interface CityListProps {
  cities: CityItem[];
}

export const CityList: React.FC<CityListProps> = ({ cities }) => {
  return <div className={styles.city_list}>
    {cities.map((item) => (
      <CityCard key={`${item.city}-${item.date}`} {...item} />
    ))}
  </div>
};
