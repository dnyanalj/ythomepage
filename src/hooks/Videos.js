import React, { useContext } from 'react'
import VideosContext from '../context/VideosContext'

function useVideos() {
    const videos=useContext(VideosContext);
    return videos;
}
export default useVideos;
