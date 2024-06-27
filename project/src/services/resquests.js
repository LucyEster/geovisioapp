const baseURL = 'http://127.0.0.1:5000/';

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de coordenadas do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/

export const getCoordinates = async () => {
  let url = baseURL + 'coordinates';

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data.coordinates);
      })
      .catch((error) => {
        console.error('Error:', error);
        reject(error)
      });
  });
}

/*
  --------------------------------------------------------------------------------------
  Função para envio de coordenadas ao servidor
  --------------------------------------------------------------------------------------
*/

export const postCoordinate = async (lat, long) => {
  const formData = new FormData();
  formData.append('latitude', lat);
  formData.append('longitude', long);

  let url = baseURL + 'coordinate';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
  
/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de catálogos geográficos do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
  
export const getGeoCatalogs = async (hashtag) => {
  let url = baseURL + 'geo_catalogs';

  if (hashtag) {
    url = url + "?" + new URLSearchParams({
      hashtag,
    })
  }

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data.geo_catalogs);
      })
      .catch((error) => {
        console.error('Error:', error);
        reject(error);
      });
  })
}
  
/*
  --------------------------------------------------------------------------------------
  Função para obter as hashtags existentes do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/

export const getHashtags = async () => {
  let url = baseURL + 'hashtags';

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data.hashtags);
      })
      .catch((error) => {
        console.error('Error:', error);
        reject(error);
      });
  })
}

/*
  --------------------------------------------------------------------------------------
  Função para envio de catálogos ao servidor
  --------------------------------------------------------------------------------------
*/

export const postGeoCatalog = async ({
    latitude, 
    longitude, 
    title, 
    description, 
    hashtag,
    img_source
}) => {
  const formData = new FormData();
  formData.append('latitude', latitude);
  formData.append('longitude', longitude);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('hashtag', hashtag);
  formData.append('img_source', img_source);

  let url = baseURL + 'geo_catalog';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para remover um catálogo geográfico do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
  
export const removeGeoCatalog = async (id) => {
  let url = baseURL + 'geo_catalog';

  
    url = url + "?" + new URLSearchParams({
      id,
    })
  

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'delete',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        reject(error);
      });
  })
}
