import './GeoCatalogList.css';
import GeoCatalogItem from './GeoCatalogItem';

import React from 'react'
import { getGeoCatalogs } from '../../services/resquests';

const GeoCatalogList = () => {

  const [geocatalogs, setGeocatalogs ] = React.useState(null);
  
  const fetchGeocatalogs = React.useCallback(async () => {
    if ( geocatalogs ) return;

    const result = await getGeoCatalogs();
    setGeocatalogs(result);
  }, [geocatalogs])

  fetchGeocatalogs()

  return geocatalogs ? (
    <div className="GeoCatalogList">
        {geocatalogs && geocatalogs.map((item, index) =>
            <GeoCatalogItem id={index} item={item}/>
        )}
    </div>
  ) : <> Não há catálogos cadastrados. </>

}
export default GeoCatalogList;