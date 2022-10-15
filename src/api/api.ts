const domain = 'http://localhost:4000';

export const api = {
  loadManicureData: async (cardsApiProps: string) => {
    const response = await fetch(`${domain}/${cardsApiProps}`);
    if (!response.ok) {
      throw new Error('Произошла ошибка загрузки данных');
    }
    const data = await response.json();
    return data;
  },
};
