
const baseUrl = 'https://swapi.dev/api';
const peopleEndpoint = '/people';

export default function getUsers() {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          Accept: 'application/json;odata=verbose',
        },
      };
  
      fetch(`${baseUrl}${peopleEndpoint}`, options)
        .then(response => response.json()
          .then(jsonResponse => {
            if (response.ok) return resolve(jsonResponse.results)
            return reject(new Error(`There was an error fetching user data. Error: ${jsonResponse}`));
          })
          .catch(err => reject(new Error(`There was an error fetching user data. Error: ${err}`)))
        )
    });
  }
  
  