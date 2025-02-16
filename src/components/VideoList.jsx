import React from 'react'
import Thumbnail from './Thumbnail';
import PlayButton from './PlayButton';
import VideosContext from '../context/VideosContext';
import { useContext } from 'react';
function VideoList({editVideo}) {
  const videos=useContext(VideosContext);
  return (
    <div>
      {
        videos.map((video,index)=>{
        return ( 
            <Thumbnail 
              id={video.id} 
              key={video.id}    
              thumbNailImg={video.thumbNailImg}
              channelName={video.channelName}
              views={video.views}
              time={video.time}
              // dispatch={dispatch}
              editVideo={editVideo}>
            <PlayButton onPlay={()=>{console.log("play")}} onPause={()=>{console.log("pause")}}>resume/pause</PlayButton>
        </Thumbnail>);
        })
      }
    </div>
  )
}

export default VideoList
