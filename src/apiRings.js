const BASE_URL = 'https://the-one-api.dev/v2/';
const character = 'character';
const bearer = 'Bearer XJlq9OFMcHAy8pAQK7xj';

const options = {
  headers: {
    Authorization: bearer,
  },
};

export function apiRings() {
  return fetch(`${BASE_URL}${character}?limit=10&page=1`, options).then(
    response => {
      if (!response.ok) {
        throw new Error('fail');
      }
      return response.json();
    }
  );
}

//how to add markup to API?
