import React, { useContext, useEffect } from 'react'
import './Thumbnail.css';
import ThemeContext from '../context/ThemeContext';

import useVideoDispatch from '../hooks/VideoDispatch'
import VideoDispatchContext from '../context/VideoDispatchContext';

function Thumbnail({thumbNailImg,id,channelName,views,time,children,editVideo}) {
    console.log("video render");
    let channelJSX=<div className='channel'>{channelName}</div>

    const theme=useContext(ThemeContext);

    const dispatch=useContext(VideoDispatchContext);
    // hyachya jagi custom hook 
    // const dispatch=useVideoDispatch();


  

    // useEffect(()=>
    //   {
    //     let it=setInterval(()=>{console.log('video playing',id);
    //     },3000)
    //     return ()=>{
    //       clearInterval(it);
    //     }
    //   },[id]);


  return (
    <div>
        <button className="close" onClick={()=>{
          // deleteVideo(id)
          dispatch({type:'DELETE', payload:id})
          }}>X</button>
        <button className="edit" onClick={()=>{editVideo(id)}}>edit</button>
        <div className='thumbnailImg'>
            <img src={thumbNailImg} alt="" />
        </div>

        <div className={`channelName ${theme}`}>{channelName}</div>
              
        <div className={`views ${theme} `}>{views}</div>
        <div className={`time ${theme} `}>{time}</div>
        {children}
    </div>
  )
}

export default Thumbnail
