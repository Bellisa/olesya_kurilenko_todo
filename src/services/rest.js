import { errObserver } from './observer';

const BASE_URL = 'http://localhost:8081/';

export const request = (url, method = 'GET', body, options) => {
  const fetchOpts = {
    method,
    credentials: 'include',
    body: JSON.stringify(body)
  };

  Object.assign(fetchOpts, options);

  const promise = fetch(`${BASE_URL}${url}`, fetchOpts)
    .then(response => response.json())
    .then((data) => {
      if (data.error) {
        return Promise.reject(data.error);
      }

      return Promise.resolve(data);
    });

  promise.catch(error => errObserver.trigger(error));

  return promise;
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
  }
};
// const BASE_URL = 'http://localhost:8081/';

// export const request = (url, method = 'GET', data, options) => {
//   const fetchOpt = {
//     method,
//     credentials: 'include'
//   };
//   Object.assign(fetchOpt, options);
//   if (data) {
//     Object.assign(fetchOpt, { body: JSON.stringify(data) });
//   }

//   return fetch(`${BASE_URL}${url}`, fetchOpt)
//     .then(response => response.json())
//     .then((data) => {
//       if (data.error) {
//         return Promise.reject(data.error);
//       }
//       return Promise.resolve(data);
//     });
// };

// export const rest = {
//   get(url) {
//     return request(url);
//   },

//   post(url, body) {
//     const options = {
//       headers: {
//         'Content-type': 'application/json; charset=utf-8'
//       }
//     };
//     return request(url, 'POST', body, options);
//   },

//   put(url, body) {
//     const options = {
//       headers: {
//         'Content-type': 'application/json; charset=utf-8'
//       }
//     };
//     return request(url, 'PUT', body, options);
//   },

//   delete(url) {
//     return request(url, 'DELETE');
//   },
// };


// const BASE_URL = 'http://localhost:8081/';
// export const request = (url, method = 'GET', body, options) => {
//   const fetchOpts =
//     {
//       method: method,
//       credentials: 'include',
//       body: JSON.stringify(body)
//     };
//   Object.assign(fetchOpts, options);
//   return fetch(`${BASE_URL}${url}`, fetchOpts)
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         return Promise.reject(data.error);
//       }
//       return Promise.resolve(data);
//     })
// };
// export const rest = {
//   get(url) {
//     return request(url);
//   },
//   post(url, body) {
//     const options = {
//       headers: { 'Content-type': 'application/json; charset=utf-8' }
//     };
//     return request(url, 'POST', body, options);
//   },
//   put(url, body) {
//     const options = {
//       headers: { 'Content-type': 'application/json; charset=utf-8' }
//     };
//     return request(url, 'PUT', body, options);
//   },
//   delete(url) {
//     return request(url, 'DELETE');
//   }
// };
