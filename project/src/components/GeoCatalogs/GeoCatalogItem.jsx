import './GeoCatalogItem.css';

import React from 'react'
import { formatImage } from '../../utils';
import CenterMapButton from '../Button/CenterMapButton';
import DeleteButton from '../Button/DeleteButton';
import { removeGeoCatalog } from '../../services/resquests';

const GeoCatalogItem = ({item}) => {

    let imgSrc = formatImage(item.img_source);

    const handleDelete = async (catalogId) => {
      const result = await removeGeoCatalog(catalogId);
      if(result)
        alert(result.success ?? "Houve um problema ao excluir o catálogo. Tente novamente mais tarde.");
    }

  return (
        <div className="GeoCatalogItem">
            <img className="GeoCatalogItem-imgTumb" src= { imgSrc } />
            <div className="GeoCatalogItem-header">
                <h4> { item.title } </h4>
                <DeleteButton 
                  handleDelete={handleDelete}
                  catalogId={item.id}
                  />
            </div>
            <p> { item.description } </p>
            <div className="GeoCatalogItem-hashtag"> { item.hashtag } </div>
            <div className="GeoCatalogItem-longitude"> { item.longitude }</div>
            <div className="GeoCatalogItem-latitude"> { item.latitude } </div>
            <br></br>
            <CenterMapButton
              latitude={item.latitude}
              longitude={item.longitude}
            />
            <br></br>
        </div>
  );
}

export default GeoCatalogItem;