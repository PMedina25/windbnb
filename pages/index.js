import styles from '../styles/Home.module.css';
import { useGlobalContext } from '../context'

import TopBar from '../components/TopBar';
import Stay from '../components/Stay';
import NumberStays from '../components/NumberStays';
import SearchSection from '../components/SearchSection/SearchSection';

import data from '../data/stays.json';

export default function Home() {
  const { city, showSearchSection, setShowSearchSection, numberAdults, numberChildren } = useGlobalContext();
  const staysByCityAndByGuests = data.filter(x => x.city === city && (numberAdults + numberChildren) <= x.beds);
  const numberOfStays = staysByCityAndByGuests.length;

  const showSearchSectionHandler = () => {
    showSearchSection && setShowSearchSection(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={`${showSearchSection ? ' ' + styles.searchOverlay + ' ' + styles.showOverlay + ' ' + styles.showSearchSection : styles.searchOverlay}`} onClick={showSearchSectionHandler}></div>
        <TopBar />

        <main className={styles.main}>
        {
          numberOfStays === 0 ? 
          <h1>Stays Not Found</h1> :
          <>
            <div className={styles.staysHeader}>
              <h1 className={styles.staysTitle}>Stays</h1>
              <NumberStays numberOfStays={numberOfStays} />
            </div>
            <div id={styles.homeGrid}>
              {staysByCityAndByGuests.map((stay, index) => {
                return <Stay 
                        key={index} 
                        superHost={stay.superHost}
                        title={stay.title}
                        rating={stay.rating}
                        maxGuests={stay.maxGuests}
                        type={stay.type}
                        beds={stay.beds}
                        photo={stay.photo}
                      />;
              })}
            </div>
          </>
        }
          
        </main>
      </div>
      <SearchSection />
    </>
  );
}
