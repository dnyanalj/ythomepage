import React from 'react'
import Counter from './components/Counter'
import { useState ,useReducer} from 'react'
import ShowTime from './components/ShowTime'
import Addvideo from './components/Addvideo'
import VideoList from './components/VideoList'

function App() {
  console.log("app render");
  
  let homepage=[
    {
      id:1,
      thumbNailImg:"https://placebear.com/480/360",
      channelName:"Dnyanal Jathar",
      views:"200k",
      time:"1",
    },{
      id:2,
      thumbNailImg:"https://placebear.com/1280/720",
      channelName:"Dnyanal Jathar",
      views:"200k",
      time:"1",
    }
  ]
  
  const[editableVideo,setEditableVideo]=useState(null);

  function videoReducer(videos,action)
  {
    switch(action.type){
      case 'ADD':
        return [...videos,
          {...action.payload,  id : videos.length+1}
        ];   
      case 'DELETE':
        return videos.filter(video=>video.id!=action.payload);   
      case 'UPDATE':
        // payload is video here
        const index = videos.findIndex(v => v.id === action.payload.id); // Find the index of the video to update
        const newVideos = [...videos]; // Create a copy of the array (to maintain immutability)
        setEditableVideo(null);
        return newVideos.splice(index, 1, action.payload);
      default:
        return videos;
    }
  }

  const[videos,dispatch]=useReducer(videoReducer,homepage);

  // const [videos,setVideos]=useState(homepage);


  function addVideo(video){
    // action : {type:'ADD', payload:video}
    dispatch({type:'ADD', payload:video})
    // he je dispatch aahe na tyala setvideos shi corelate kar  samjayla
    // bas setvideos tithlya titha functionality lihita ki bhai videos madhi new video add kar.
    // and he dispatch aahe na te action dispatch karta tya videoReducer function madhi
    // tya action madhi lihilela asta type and payload 
    // aani actual functionality lihileli aste videoReducer function madhe 

    /////////////////////////

    // setVideos([...videos,
    //           {...video,  id : videos.length+1}
    // ]);
    // kahi nahi just videos madhe video add kelay with id
  }
  
  function deleteVideo(id){
    dispatch({type:'DELETE', payload:id})
    // console.log(id);
    // setVideos(videos.filter(video=>video.id!=id));
  }

  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id));
  }

  function updateVideo(video) {
    dispatch({type:'UPDATE',payload:video})
    // const index = videos.findIndex(v => v.id === video.id); // Find the index of the video to update
    // const newVideos = [...videos]; // Create a copy of the array (to maintain immutability)
    // newVideos.splice(index, 1, video); // Replace the existing video at `index` with the new `video`
    // setVideos(newVideos); // Update state with the new array
  }
  
  return (
    <div>
      {/* <Thumbnail {...homepage[0]}></Thumbnail>
      <Thumbnail {...homepage[1]}></Thumbnail> */}
      {/* <button onClick={()=>{
        setVideos([...videos,{
          thumbNailImg:"https://placebear.com/1280/720",
          channelName:"Dnyanal Jathar",
          views:"200k",
          time:"1"
        }])
      }}>
      addvideo</button> */}

      <Addvideo dispatch={dispatch}  editableVideo={editableVideo}></Addvideo>
      <VideoList editVideo={editVideo}  dispatch={dispatch} videos={videos}></VideoList>
      
      <Counter></Counter>
      <ShowTime></ShowTime>
    </div>
  )
}

export default App
