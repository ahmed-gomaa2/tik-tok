import React from 'react';
import './css/VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'


const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked] = React.useState(false)

    const liking = () => {
        setLiked(!liked)
    }

    return (
        <div className={'videoSidebar'}>
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize={'large'} onClick={liking} />
                ) : (
                    <FavoriteBorderIcon fontSize={'large'} onClick={liking} />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize={'large'} />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize={'large'} />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;