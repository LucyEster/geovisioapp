import './HashtagList.css';
import HashTagItem from './HashTagItem';

import React from 'react'
import { getHashtags } from '../../services/resquests';

const HashTagList = () => {

  const [hashtags, setHashtags ] = React.useState(null);
  
  const fetchHashtags = React.useCallback(async () => {
    if (hashtags) return;
    const result = await getHashtags();
    setHashtags(result);
  }, [hashtags])

  fetchHashtags()

  return hashtags ? (

    <>
      
        <div className="HashtagList">
        <h3>Filtre por hashtags:</h3>
          {hashtags && hashtags.map((hashtag, index) =>
              <HashTagItem 
              key={hashtag} 
              hashtag={hashtag}/>
          )}
        </div>
    </>

  ) : <> Não há hashtags cadastradas. </>

}
export default HashTagList;