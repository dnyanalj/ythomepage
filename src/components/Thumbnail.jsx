import React from 'react'
import './Thumbnail.css';


function Thumbnail({thumbNailImg,id,channelName,views,time,children,dispatch,editVideo}) {
    console.log("video render");
    let channelJSX=<div className='channel'>{channelName}</div>
  return (
    <div>
        <button className="close" onClick={()=>{dispatch({type:'DELETE', payload:id})}}>X</button>
        <button className="edit" onClick={()=>{editVideo(id)}}>edit</button>
        <div className='thumbnailImg'>
            <img src={thumbNailImg} alt="" />
        </div>
        <div className="channelName">{channelName}</div>
        {channelJSX}
        <div className="views">{views}</div>
        <div className="time">{time}</div>
        {children}
    </div>
  )
}

export default Thumbnail
