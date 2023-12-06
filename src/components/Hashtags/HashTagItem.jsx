import './HashtagItem.css';

import React from 'react'

const HashTagItem = ({hashtag, index}) => {

  return (
    <div id={hashtag} className="HashtagItem">
        {hashtag}
    </div>
  );
}

export default HashTagItem;