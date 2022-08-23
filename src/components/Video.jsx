import React from "react";
import VideoIndex from '../Images/VideoIndex.mp4'

const Video = () => {
    return ( 
        <video className="videoIndex" loop autoPlay muted src={VideoIndex}></video>
     );
}
 
export default Video;