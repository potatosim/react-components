import Cards from 'components/Cards/Cards';
import SearchField from 'components/SearchField/SearchField';
import styles from './HomePage.module.scss';
import { useEffect, useLayoutEffect, useState } from 'react';
import CharacterItem from 'types/CharacterItem';
import RickAndMortyApi from 'api/RickAndMortyApi';
import { createPortal } from 'react-dom';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    const valueFromStorage = localStorage.getItem('searchValue') || '';
    setSearchFieldValue(valueFromStorage);
    fetchByName(valueFromStorage);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setIsError(false), 2000);

    return () => clearTimeout(id);
  }, [isError]);

  const fetchByName = async (name: string) => {
    try {
      setIsLoading(true);
      const { results } = await RickAndMortyApi.getCharactersByName(name);
      localStorage.setItem('searchValue', name);
      setCharacters(results);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SearchField
        onClick={() => fetchByName(searchFieldValue)}
        value={searchFieldValue}
        setValue={setSearchFieldValue}
        isError={isError}
      />
      <Cards characters={characters} />
      {isLoading && createPortal(<Loader />, document.body)}
    </div>
  );
};

export default HomePage;
