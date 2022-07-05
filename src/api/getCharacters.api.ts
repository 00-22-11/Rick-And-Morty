export const getCharactersApi = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await data.json();

  return results;
};
