import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSubReddits, resetSubReddits, selectSubReddits } from './sidebarListSlice';
import { getSubscribers } from '../../utils';
import './sidebarList.css';
import { Link } from 'react-router-dom';


function SidebarList (props) {
    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.sidebarList);

     // Load post comments
     const subRedditsLink = 'https://www.reddit.com/subreddits/.json'; // currently test link

     useEffect(() => {
         dispatch(resetSubReddits());
         dispatch(loadSubReddits(subRedditsLink));
     }, [dispatch]);
     
     const subReddits = useSelector(selectSubReddits);


     if (isLoading){
         return (
            <div className="Sidebar-List">
                <h2>Popular Subreddits</h2>
                <h2 className="loading">...</h2>
            </div>
         );
     }
 
     if (hasError){
         return (
            <div className="Sidebar-List">
                <h2>Popular Subreddits</h2>
                <h2 className="error">Ooops!  Something went wrong.  Reload and try again.</h2>
            </div>
         );
     }
 
     return (
        <div className="Sidebar-List">
            <h2>Popular Subreddits</h2>
            {
                subReddits.map((subReddit) => {
                    // formatting descrition html
                    //const descHtml = decodeEntities(subReddit.description); -> will need to import from utils

                    return (
                        <Link to={`/r/${subReddit.display_name}`} >
                            <div className="sub-reddit">
                                <h3>{subReddit.title}</h3>
                                <h4>{`${getSubscribers(subReddit.subscribers)} subscribers`}</h4>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
     )
 

} 


export default SidebarList;