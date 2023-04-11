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
  static getCharactersByName = async (name: string) => {
    const { data } = await axios.get<GetResponse>(
      `${process.env.REACT_APP_API_URL}/${RickAndMortyEndpoints.Character}`,
      {
        params: { name: name },
      },
    );

    return data;
  };

  static getCharacter = async (id: number) => {
    const { data } = await axios.get<CharacterItem>(
      `${process.env.REACT_APP_API_URL}/${RickAndMortyEndpoints.Character}/${id}`,
    );

    return data;
  };
}
