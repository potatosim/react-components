import axios from 'axios';
import CharacterItem from 'types/CharacterItem';

enum RickAndMortyEndpoints {
  Character = 'character',
}

interface GetResponse {
  count: number;
  next: string;
  previous: string | null;
  results: CharacterItem[];
}

export default class RickAndMortyApi {
  static instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  static getCharacters = async () => {
    const { data } = await this.instance.get<GetResponse>(RickAndMortyEndpoints.Character);

    return data;
  };

  static getFilteredCharacters = async (name: string) => {
    const { data } = await this.instance.get<GetResponse>(RickAndMortyEndpoints.Character, {
      params: { name: name },
    });

    return data;
  };
}
