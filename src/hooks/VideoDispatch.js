import { useContext } from "react";
import VideoDispatchContext from '../context/VideoDispatchContext';

function useVideoDispatch(){
    const dispatch=useContext(VideoDispatchContext);
    return dispatch;    
}
export default useVideoDispatch;