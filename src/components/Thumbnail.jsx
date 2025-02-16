import React, { useContext } from 'react'
import './Thumbnail.css';
import ThemeContext from '../context/ThemeContext';
import VideoDispatchContext from '../context/VideoDispatchContext';

function Thumbnail({thumbNailImg,id,channelName,views,time,children,editVideo}) {
    console.log("video render");
    let channelJSX=<div className='channel'>{channelName}</div>

    const theme=useContext(ThemeContext);
    const dispatch=useContext(VideoDispatchContext);
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
              {channelJSX}
        <div className={`views ${theme} `}>{views}</div>
        <div className={`time ${theme} `}>{time}</div>
        {children}
    </div>
  )
}

export default Thumbnail
