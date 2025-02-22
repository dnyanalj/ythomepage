import React, { useContext } from 'react'
import { useState ,memo} from 'react';
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext';

const PlayButton=memo(function PlayButton({onPlay,onPause,children}) {
    const theme=useContext(ThemeContext);
    
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
    <div onClick={Run} >
        <button className={`${theme}`} onClick={run}>   {playing?'⏸':'▶'}   </button>
    </div>
)}
);
export default PlayButton
