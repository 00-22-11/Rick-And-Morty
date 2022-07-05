import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import charactersStore from '../../../shared/stores/characters.store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCharacterInfoViewModel = (): any => {
  const { charId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        await charactersStore.setCharacterInfo(charId);
      })();
    } finally {
      setIsLoading(false);
    }
  }, [charId]);

  return { isLoading };
};
