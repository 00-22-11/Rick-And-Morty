/* eslint-disable no-console */
import { action, makeObservable, observable } from 'mobx';

import { getCharactersApi, getCharactersInfoApi } from '../../api';
import { Undefined } from '../../shared/types';
// import { RMInterfaceFullApi } from '../../api/types';

class CharactersStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characters: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characterInfo: any = {};

  constructor() {
    makeObservable(this, {
      characters: observable,
      characterInfo: observable,
      setCharacterInfo: action,
      setCharacters: action
    });
  }

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
