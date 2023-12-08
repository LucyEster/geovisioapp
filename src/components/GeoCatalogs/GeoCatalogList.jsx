import './GeoCatalogList.css';
import GeoCatalogItem from './GeoCatalogItem';

import React, { useContext } from 'react'
import { getGeoCatalogs } from '../../services/resquests';
import { MapViewContext } from '../../App';

const GeoCatalogList = () => {

  const [geocatalogs, setGeocatalogs ] = React.useState(null);
  const { hashtag, setHashtag } = useContext(MapViewContext);
  
  const fetchGeocatalogs = React.useCallback(async () => {
    if ( geocatalogs ) {
      if (hashtag){
        const result = await getGeoCatalogs(hashtag.replace("#",""));
        setGeocatalogs(result);
        setHashtag(null);
      }
      return;
    }

    const result = await getGeoCatalogs();
    setGeocatalogs(result);
    return;

  }, [geocatalogs, hashtag])

  fetchGeocatalogs()

  return geocatalogs ? (

    <div className="GeoCatalogList">
        {geocatalogs && geocatalogs.map((item, index) =>
            <GeoCatalogItem key={item.id} item={item}/>
        )}
    </div>

  ) : <> Não há catálogos cadastrados. </>

}
export default GeoCatalogList;