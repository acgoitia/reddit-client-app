import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSubReddits, resetSubReddits, selectSubReddits } from './sidebarListSlice';
import { getSubscribers } from '../../utils';
import './sidebarList.css';


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
                <h1>Loading...</h1>
            </div>
         );
     }
 
     if (hasError){
         return (
            <div className="Sidebar-List">
                <h1>Ooops!  Something went wrong and we couldn't fetch data from server.  Reload and try again.</h1>
            </div>
         );
     }
 
     return (
        <div className="Sidebar-List">
            {
                subReddits.map((subReddit) => {
                    // formatting descrition html
                    //const descHtml = decodeEntities(subReddit.description); -> will need to import from utils

                    return (
                        <div className="sub-reddit">
                            <h3>{subReddit.title}</h3>
                            <h4>{getSubscribers(subReddit.subscribers)}</h4>
                        </div>
                    );
                })
            }
        </div>
     )
 

} 


export default SidebarList;