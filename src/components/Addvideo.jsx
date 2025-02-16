import React, { useState,useEffect, useContext} from 'react'
import VideoDispatchContext from '../context/VideoDispatchContext';
let emptyState={
        thumbNailImg:"https://placebear.com/1280/720",
        channelName:"Dnyanal Jathar",
        views:"200k",
        time:"1"
}
function Addvideo({editableVideo}) {

    const [video,setVideo]=useState(emptyState);
    const dispatch=useContext(VideoDispatchContext);

    function handleSubmit(e){
        e.preventDefault();
        // console.log(video);
        if(editableVideo){
            // updateVideo(video); rather than this we will use dispatch
            dispatch({type:'UPDATE',payload:video})
        }else{
            // addVideo(video);
            dispatch({type:'ADD',payload:video})
        }
        setVideo(emptyState);
    }

    function handleChange(e){
        console.log(e.target.name);
        // means thumbNailImg  channelName   views
        console.log(e.target.value);
        // here values which are passed by user
        setVideo({
            ...video,
            [e.target.name]: e.target.value 
        });
        console.log(video);
    }

    useEffect(()=>{
        if(editableVideo != null){
            setVideo(editableVideo);
        }
    },[editableVideo]);

return (
    <div>
        <form action="">
            <input 
                type="text" 
                name='thumbNailImg' 
                onChange={handleChange} 
                placeholder='thumbnail'
                value={video.thumbNailImg}></input>
            <input 
                type="text" 
                name='channelName' 
                onChange={handleChange} 
                placeholder='channelName'  
                value={video.channelName}></input>
            <input 
                type="text" 
                name='views' 
                onChange={handleChange} 
                placeholder='views'></input>
            <button onClick={handleSubmit}>
                {editableVideo?'Edit':'Add'}submit
            </button>
        </form>
    </div>
)}

export default Addvideo
