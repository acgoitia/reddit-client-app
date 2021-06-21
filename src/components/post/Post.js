import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useEffect, useState } from 'react';
//import { redditJson, jsonToTitle } from '../../utils';
import { selectTitle, editTitle } from './postSlice';

function Post (props) {
    const dispatch = useDispatch();
    const testPost = 'You think you could do this?';
    dispatch(editTitle(testPost));
    
    const title = useSelector(selectTitle);

    return (
        <div className="Post">
            <h1>{title}</h1>
        </div>

    );

}

export default Post;

//You think you could do this?