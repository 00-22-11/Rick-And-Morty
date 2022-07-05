import { action, makeObservable, observable } from 'mobx';

import { getCharactersApi, getCharactersInfoApi } from '../../api';
import { RMInterfaceApi } from '../../api/types';
import { Undefined } from '../../shared/types';
// import { RMInterfaceFullApi } from '../../api/types';

class CharactersStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characters: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characterInfo: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userFavorites: any = [];

  constructor() {
    makeObservable(this, {
      characters: observable,
      characterInfo: observable,
      userFavorites: observable,

      addFavorites: action,
      setCharacterInfo: action,
      setCharacters: action
    });
  }

  addFavorites = (id: number) => {
    this.userFavorites.push(this.characters[id - 1]);
  };

  removeFavorites = (charId: number) => {
    const sortedArray = this.userFavorites.filter((item: RMInterfaceApi) => item.id !== charId);
    this.userFavorites = sortedArray;
  };

  async setCharacterInfo(charId: Undefined<string>) {
    const characterInfo = await getCharactersInfoApi(`https://rickandmortyapi.com/api/character/${charId}`);
    this.characterInfo = characterInfo;
  }

  async setCharacters() {
    const characters = await getCharactersApi();
    this.characters = characters;
  }
}

// eslint-disable-next-line import/no-default-export
export default new CharactersStore();
