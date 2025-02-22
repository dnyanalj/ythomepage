import React, { useState,useEffect, useContext, useRef} from 'react';
import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from '../hooks/VideoDispatch'

let emptyState={
        thumbNailImg:"https://placebear.com/1280/720",
        channelName:"Dnyanal Jathar",
        views:"200k",
        time:"1"
}

function Addvideo({editableVideo}) {

    
    const [video,setVideo]=useState(emptyState);
    
    const inputRef=useRef(null);

    // const dispatch=useContext(VideoDispatchContext);
    
    // now instead of calling dispatch function with the useContext we will
    // call it with custom hook .........
    
    // bhai first time using custom hook
    const dispatch=useVideoDispatch();

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
        // useRef practice
        // inputRef.current.value="demo"
        // inputRef.current.focus()
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
                ref={inputRef}
                type="text" 
                name='views'
                className='viewsClass' 
                onChange={handleChange} 
                placeholder='views'></input>

            <button onClick={handleSubmit}>
                {editableVideo?'Edit':'Add'}submit
            </button>
            {/* <button onClick={()=>{ inputRef.current.value="demo"}}>focus</button> */}
        </form>
    </div>
)}

export default Addvideo
