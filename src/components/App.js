import React from 'react';
import './css/App.css';
import Video from './Video'
import {connect} from 'react-redux'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

function App({videos}) {
  return (
    <div className="app">
      <div className="app__videos">
          {videos?.map(video => (
              <Video
                  url={video.url}
                  channel={video.channel}
                  desc={video.desc}
                  song={video.song}
                  likes={video.likes}
                  messages={video.messages}
                  shares={video.shares}
              />
          ))}

      </div>
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        videos: state.firestore.ordered.videos
    }
}

export default compose(
   connect(mapStateToProps, null),
   firestoreConnect(props => [
       {
           collection: 'videos'
       }
   ])
) (App);