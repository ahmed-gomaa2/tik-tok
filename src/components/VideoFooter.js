import React from 'react';
import './css/VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'


const VideoFooter = ({channel, desc, song}) => {
    return (
        <div className={'videoFooter'}>
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{desc}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className={'videoFooter__icon'}/>
                    <Ticker mode={'smooth'}>
                        {({index})=> (
                            <>
                                <p>{song} </p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    );
};

export default VideoFooter;