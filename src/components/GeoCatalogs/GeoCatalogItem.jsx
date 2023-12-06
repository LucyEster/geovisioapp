import './GeoCatalogItem.css';

import React from 'react'
import { formatImage } from '../../utils';
import CenterMapButton from '../Button/CenterMapButton';

const GeoCatalogItem = ({item, index}) => {

    let imgSrc = formatImage(item.img_source);

  return (
        <div className="GeoCatalogItem">
            <img className="GeoCatalogItem-imgTumb" src= { imgSrc } />
            <h4> { item.title } </h4>
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