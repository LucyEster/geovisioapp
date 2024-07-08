import { MapViewContext } from '../../App';
import './HashtagItem.css';

import React, { useContext } from 'react'

const HashTagItem = ({filter, filterType}) => {

  const { setHashtag, setRegion } = useContext(MapViewContext);

  const handleFilterCatalogs = () => {
    if(filterType.includes("hashtag")){
      setHashtag(filter)
    }else{
      setRegion(filter)
    }
    
  }

  return (
    <div onClick={handleFilterCatalogs} className="HashtagItem">
        {filter}
    </div>
  );
}

export default HashTagItem;