import React from 'react'
import { useState } from 'react';
import './PlayButton.css'

function PlayButton({onPlay,onPause,children}) {
    console.log("playbtn render");
    
    let [playing,setPlaying]=useState(false);
    function Run()
    {
        console.log("div clicked");
    }
    function run(e){
        if(playing){
            onPause();
        }else{
            onPlay();
        }
        playing=setPlaying(!playing);
        e.stopPropagation();  
    }
    return (
    <div onClick={Run}>
        <button onClick={run}>{playing?'⏸':'▶'}</button>
    </div>
)}

export default PlayButton
