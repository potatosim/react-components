import Cards from 'components/Cards/Cards';
import SearchField from 'components/SearchField/SearchField';
import styles from './HomePage.module.scss';
import { useEffect, useState } from 'react';
import CharacterItem from 'types/CharacterItem';
import RickAndMortyApi from 'api/RickAndMortyApi';

const HomePage = () => {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [value, setValue] = useState<string>('');

  const fetchData = async () => {
    const { results } = await RickAndMortyApi.getCharacters();
    setCharacters(results);
  };
  const valueFromStorage = localStorage.getItem('searchValue');

  useEffect(() => {
    if (!valueFromStorage) {
      fetchData();
    }
    fetchByName(valueFromStorage!);
  }, []);

  const fetchByName = async (name: string) => {
    const { results } = await RickAndMortyApi.getFilteredCharacters(name);
    setCharacters(results);
  };

  return (
    <div className={styles.pageWrapper}>
      <SearchField onClick={() => fetchByName(value)} value={value} setValue={setValue} />
      <Cards characters={characters} />
    </div>
  );
};

export default HomePage;
