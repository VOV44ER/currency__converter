const URL = 'https://api.exchangerate.host/latest';

export const getCurrency = (options) => fetch(`${URL}${options}`)
  .then(response => response.json());
