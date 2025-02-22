import React, { useCallback, useEffect, useState } from 'react'
import Thumbnail from './Thumbnail';
import PlayButton from './PlayButton';
import VideosContext from '../context/VideosContext';
import { useContext } from 'react';
import useVideos from '../hooks/Videos'
import axios from 'axios'
import useVideoDispatch from '../hooks/VideoDispatch';

function VideoList({editVideo}) {
  
  // const videos=useContext(VideosContext);
  // used custom hook
  const videos=useVideos();
  const dispatch=useVideoDispatch();

  
    
  const url="https://my.api.mockaroo.com/newdata?key=c2792580"

  async function handleClick()
  {
    let res=await axios.get(url);
    console.log('getVideos',res.data);
    // setVideos(res.data);
    dispatch({type:'LOAD',payload:res.data});
    
  }

  useEffect(()=>{
    handleClick();
  },[]);

  const play=useCallback(()=>{console.log("play")},[]);
  const pause=useCallback(()=>{console.log("pause")},[]);

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

            <PlayButton 
            onPlay={play} 
            onPause={pause}
            >resume/pause</PlayButton>

        </Thumbnail>);
        })
      }
      <button onClick={handleClick}>getvideos</button>
    </div>
  )
}

export default VideoList
