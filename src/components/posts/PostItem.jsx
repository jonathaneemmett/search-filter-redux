import React, {useEffect} from 'react';

const PostItem = (data) => {

    return (
        <div className="postItem">{data.data.title}</div>
    );
};

export default PostItem;
