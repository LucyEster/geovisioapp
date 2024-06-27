import './GeoCatalogsView.css';
import HashTagList from '../Hashtags/HashTagList';
import GeoCatalogList from '../GeoCatalogs/GeoCatalogList';

import React from 'react'

const GeoCatalogsView = ({active}) => {

   if (active) return (
    <div className="GeoCatalogsView">
        <HashTagList/>
        <GeoCatalogList/>
    </div>
  );
  
  return <></>;
}

export default GeoCatalogsView;