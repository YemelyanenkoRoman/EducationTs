const domain = 'http://localhost:4000';

export const api = {
  loadManicureData: async () => {
    const response = await fetch(`${domain}/manicureData`);
    if (!response.ok) {
      throw new Error('Произошла ошибка загрузки данных');
    }
    const data = await response.json();
    return data;
  },
};
