import './GeoCatalogList.css';
import GeoCatalogItem from './GeoCatalogItem';
import { mockCatalogs } from '../../utils';

import React from 'react'

const GeoCatalogList = () => {

  const list = mockCatalogs().geo_catalogs;

  return (
    <div className="GeoCatalogList">
        {list && list.map((item, index) =>
            <GeoCatalogItem id={index} item={item}/>
        )}
    </div>
  );

}
export default GeoCatalogList;