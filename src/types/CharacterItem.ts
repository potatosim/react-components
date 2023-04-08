interface CharacterItem {
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
  id: number;
  origin: CharacterOrigin;
  location: CharacterOrigin;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

export default CharacterItem;
