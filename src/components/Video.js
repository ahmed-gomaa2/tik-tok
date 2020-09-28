import React, {useRef, useState} from 'react';
import './css/Video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url, channel, desc, song, likes, messages, shares}) => {
    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className={'video'}>
            <video src={url} onClick={onVideoPress} loop ref={videoRef}

               className="video__player"></video>
            <VideoFooter channel={channel} desc={desc} song={song}/>
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
};

export default Video;