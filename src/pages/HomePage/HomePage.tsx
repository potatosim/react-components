import Cards from 'components/Cards/Cards';
import SearchField from 'components/SearchField/SearchField';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <SearchField />
      <Cards />
    </div>
  );
};

export default HomePage;
