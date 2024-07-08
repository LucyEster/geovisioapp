const baseURL = 'http://127.0.0.1:5000/';

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de coordenadas do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/

export const getCoordinates = async (name) => {
  let url = baseURL + 'coordinates';

  if (name) {
    url = url + "?" + new URLSearchParams({
      name,
    })
  }

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

export const postCoordinate = async (geocatalog) => {
  const formData = new FormData();
  formData.append('latitude', geocatalog.latitude);
  formData.append('longitude', geocatalog.longitude);
  formData.append('city', geocatalog.city);
  formData.append('region', geocatalog.region);
  formData.append('country', geocatalog.country);
  formData.append('name', geocatalog.name);
  formData.append('contact', geocatalog.contact);

  let url = baseURL + 'coordinate';

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'post',
        body: formData
      })
        .then((response) => resolve(response))
        .catch((error) => {
          console.error('Error:', error);
          reject(error);
        });
    })
}
  
/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de catálogos geográficos do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
  
export const getGeoCatalogs = async (filter, region) => {
  let url = baseURL + 'geo_catalogs';

  if (filter && region) {
    url = url + "?" + new URLSearchParams({
      region: filter,
    })
  } else if (filter) {
    url = url + "?" + new URLSearchParams({
      hashtag: filter,
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
  Função para obter as hashtags existentes do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/

export const getRegions = async () => {
  let url = baseURL + 'regions';

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data.regions);
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
    img_source,
    name,
    contact,
    region,
    city,
    country,
}) => {
  const formData = new FormData();
  formData.append('latitude', latitude);
  formData.append('longitude', longitude);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('hashtag', hashtag);
  formData.append('img_source', img_source);
  formData.append('name', name);
  formData.append('contact', contact);
  formData.append('region', region);
  formData.append('city', city);
  formData.append('country', country);

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
