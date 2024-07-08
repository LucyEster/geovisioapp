import './GeoCatalogItem.css';

import React, { useContext } from 'react'
import { formatImage } from '../../utils';
import CenterMapButton from '../Button/CenterMapButton';
import DeleteButton from '../Button/DeleteButton';
import { removeGeoCatalog } from '../../services/resquests';
import { MapViewContext }from '../../App';

const GeoCatalogItem = ({item}) => {

    const { setRefetch } = useContext(MapViewContext);

    let imgSrc = formatImage(item.img_source);

    const handleDelete = async (catalogId) => {
      const result = await removeGeoCatalog(catalogId);
      if(result){
        alert(result.success ?? "Houve um problema ao excluir o catálogo. Tente novamente mais tarde.");
        if(result.success){
          setRefetch(true);
        }
      }
        
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
            <p> Instituição: { item.name } </p>
            <p> Contato: { item.contact } </p>
            <p> { item.description } </p>
            <p> { `${item.city}, ${item.region}, ${item.country}`} </p>
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