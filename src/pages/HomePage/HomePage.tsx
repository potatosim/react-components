import { FC, useEffect } from 'react';
import { useAppSelector } from 'hooks/reduxHooks';
import { useLazyGetCharactersByNameQuery } from 'services/charactersApi';
import Cards from 'components/Cards';
import SearchField from 'components/SearchField';
import Loader from 'components/Loader';
import Portal from 'components/Portal';

import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  const { searchValue } = useAppSelector((state) => state.search);
  const [load, { data, isFetching, isError }] = useLazyGetCharactersByNameQuery();

  useEffect(() => {
    load(searchValue);
  }, []);

  return (
    <>
      <div className={styles.pageWrapper}>
        <SearchField onSubmit={load} />
        <Cards characters={data?.results} isError={isError} />
      </div>
      <Portal condition={isFetching}>
        <Loader />
      </Portal>
    </>
  );
};

export default HomePage;
