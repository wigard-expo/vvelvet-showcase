import { useEffect, useRef, useState } from 'react';
import type React from 'react';

import styles from './app.module.scss';
import artistImg from './assets/images/artist.png';
import { Footer, CityList, Tape } from './components';

const cities = [
  { city: 'Казань', date: '04/04', venue: 'TatNeft Arena', ticketUrl: '#' },
  { city: 'Екатеринбург', date: '11/04', venue: 'Tele-Club', ticketUrl: '#' },
  { city: 'Новосибирск', date: '18/04', venue: 'Podzemka', ticketUrl: '#' },
  { city: 'Краснодар', date: '25/04', venue: 'Arena Hall', ticketUrl: '#' },
  { city: 'Ростов-на-Дону', date: '02/05', venue: 'Groove', ticketUrl: '#' },
  { city: 'Нижний Новгород', date: '09/05', venue: 'Milo Concert Hall', ticketUrl: '#' },
  { city: 'Самара', date: '16/05', venue: 'Zvezda', ticketUrl: '#' },
  { city: 'Воронеж', date: '23/05', venue: 'Event Hall', ticketUrl: '#' },
  { city: 'Уфа', date: '30/05', venue: 'Ogni Ufy', ticketUrl: '#' },
  { city: 'Минск', date: '06/06', venue: 'Prime Hall', ticketUrl: '#' },
  { city: 'Санкт-Петербург', date: '13/06', venue: 'CULT', ticketUrl: '#' },
  { city: 'Москва', date: '20/06', venue: 'Adrenaline Stadium', ticketUrl: '#' },
];

export const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return <div className={styles.app}>
    <Tape />
    <div className={styles.hero} style={{ backgroundImage: `url(${artistImg})` }} ref={heroRef}>
      <div className={`${styles.title} ${isSticky ? styles.title_hidden : ''}`}>VVELVET</div>
    </div>

    <div className={`${styles.banner} ${isSticky ? styles.banner_sticky : ''}`}>
      <div className={styles.subtitle}>BIG 2026 TOUR</div>
      <div className={`${styles.banner_title} ${isSticky ? styles.banner_title_visible : ''}`}>VVELVET</div>
    </div>

    <CityList cities={cities} />
    <Footer />
  </div>
};
