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
    <div className="HashtagList">
        {hashtags && hashtags.map((hashtag, index) =>
            <HashTagItem id={index} hashtag={hashtag}/>
        )}
    </div>
  ) : <></>

}
export default HashTagList;