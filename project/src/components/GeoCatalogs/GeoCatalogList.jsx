import './GeoCatalogList.css';
import GeoCatalogItem from './GeoCatalogItem';

import React, { useContext, useEffect } from 'react'
import { getGeoCatalogs } from '../../services/resquests';
import { MapViewContext } from '../../App';

const GeoCatalogList = () => {

  const [geocatalogs, setGeocatalogs ] = React.useState(null);
  const { hashtag, setHashtag, region, setRegion, refetch, setRefetch } = useContext(MapViewContext);
  
  const fetchGeocatalogs = React.useCallback(async () => {
    if ( geocatalogs ) {
      if (hashtag){
        const result = await getGeoCatalogs(hashtag.replace("#",""));
        console.log(result)
        setGeocatalogs(result);
        setHashtag(null);
        return;
      } else if(region){
        const result = await getGeoCatalogs(region, "region");
        console.log(result)
        setGeocatalogs(result);
        setRegion(null);
        return;
      } else if(refetch){
        const result = await getGeoCatalogs();
        setGeocatalogs(result);
        setRefetch(false);
        return;
      }
      return;
    }

    const result = await getGeoCatalogs();
    setGeocatalogs(result);
    return;

  }, [geocatalogs, hashtag, region, refetch])

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