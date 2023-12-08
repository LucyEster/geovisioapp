import { MapViewContext } from '../../App';
import './HashtagItem.css';

import React, { useContext } from 'react'

const HashTagItem = ({hashtag}) => {

  const { setHashtag } = useContext(MapViewContext);

  const handleFilterCatalogs = () => {
    setHashtag(hashtag)
  }

  return (
    <div onClick={handleFilterCatalogs} className="HashtagItem">
        {hashtag}
    </div>
  );
}

export default HashTagItem;