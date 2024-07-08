import './HashtagList.css';
import HashTagItem from './HashTagItem';

import React, { useMemo, useContext } from 'react'
import { getHashtags, getRegions } from '../../services/resquests';
import { MapViewContext } from '../../App';

const HashTagList = () => {

  const [hashtags, setHashtags ] = React.useState(null);
  const [filter, setFilter] = React.useState("hashtag");
  const { refetch } = useContext(MapViewContext);

  const handleFetchRegions = () => {
    setFilter("region");
  }

  const handleFetchHashtags = () => {
    setFilter("hashtag");
  }

  useMemo(async () => {
    if(filter.includes("region")) {
      const result = await getRegions();
      setHashtags(result);
    } else {
      const result = await getHashtags();
      setHashtags(result);
    }
  }, [filter, refetch])

  return hashtags ? (

    <>
      
        <div className="HashtagList">
        <h3>Filtro:</h3>
        <input type="radio" id="hashtag" onClick={handleFetchHashtags} defaultChecked name="fav_language" value="hashtag"/>
        <label for="hashtag">{" Hashtags   "}</label>
        <input type="radio" onClick={handleFetchRegions} id="region" name="fav_language" value="region"/>
        <label for="region">{" Região "}</label>
          {hashtags && hashtags.map((content, index) =>
              <HashTagItem 
              key={content} 
              filter={content}
              filterType={filter}/>
          )}
        </div>
    </>

  ) : <> Não há hashtags cadastradas. </>

}
export default HashTagList;