const domen = 'http://localhost:8081/';

export const request = (url, method = 'GET', data, options) => {
  const fetchOpt = {
    method,
    credentials: 'include'
  };
  Object.assign(fetchOpt, options);
  if (data) {
    Object.assign(fetchOpt, { body: JSON.stringify(data) });
  }
  console.log(`${domen}${url}`, fetchOpt);
  return fetch(`${domen}${url}`, fetchOpt)
    .then(res => res.json());
};

export const rest = {
  get(url) {
    return request(url);
  },

  post(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'POST', body, options);
  },

  put(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'PUT', body, options);
  },

  delete(url) {
    return request(url, 'DELETE');
  },
};
