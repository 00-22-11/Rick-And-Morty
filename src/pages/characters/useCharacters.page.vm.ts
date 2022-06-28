import { useEffect, useState } from 'react';

import { getCharactersApi } from '../../api';

export const useCharactersCardViewModel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characters, setCharacters] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getCharactersApi('https://rickandmortyapi.com/api/character');
      setCharacters(data);
      setIsLoading(false);
    })();
  }, []);

  return { characters, isLoading };
};
