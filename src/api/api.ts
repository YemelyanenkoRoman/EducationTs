const domain = 'http://localhost:5000';

const request = async (url: string, init?: RequestInit) => {
  const response = await fetch(`${domain}/${url}`, init);
  if (!response.ok) {
    throw new Error('Произошла ошибка загрузки данных');
  }
  const data = await response.json();
  return data;
};

export const api = {
  getSliderData: async () => {
    return await request('mainSliderData');
  },

  create: async (data: {
    category: string;
    title: string;
    visibleText: string;
    hiddenText: string;
    imgDataPath: {
      id: string | number;
      url: string;
    }[];
  }) => {
    return await request(data.category, { method: 'POST', body: JSON.stringify(data) });
  },

  manicure: {
    get: async () => {
      return await request('manicure');
    },
    create: async (data: {
      category: string;
      title: string;
      visibleText: string;
      hiddenText: string;
      imgDataPath: {
        id: string | number;
        url: string;
      }[];
    }) => {
      return await request(data.category, { method: 'POST', body: JSON.stringify(data) });
    },
  },
  pedicure: {
    get: async () => {
      return await request('pedicure');
    },
    create: async (data: {
      category: string;
      title: string;
      visibleText: string;
      hiddenText: string;
      imgDataPath: {
        id: string | number;
        url: string;
      }[];
    }) => {
      return await request(data.category, { method: 'POST', body: JSON.stringify(data) });
    },
  },
  podology: {
    get: async () => {
      return await request('podology');
    },
    create: async (data: {
      category: string;
      title: string;
      visibleText: string;
      hiddenText: string;
      imgDataPath: {
        id: string | number;
        url: string;
      }[];
    }) => {
      return await request(data.category, { method: 'POST', body: JSON.stringify(data) });
    },
  },
};
