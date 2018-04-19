import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-control';
import { FormattedTime } from '../../libs/utils';
import ProgressBar from '../components/progressBar';
class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
    progressValue: 0,
    progressBarMax: 0,
  }
  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay) 
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: FormattedTime(this.video.duration),
      progressBarMax: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: FormattedTime(this.video.currentTime),
      progressValue: this.video.currentTime,
    });
  }
  handleProgressBar = event => {
    this.video.currentTime = event.target.value;
  }
  render() { 
    return ( 
      <VideoPlayerLayout>
        <Title 
          title="Titulo Video!"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            max={this.state.progressBarMax}
            value={this.state.progressValue}
            handleProgressBar={this.handleProgressBar}
          />
        </Controls>
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetada={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
     )
  }
}
 
export default VideoPlayer;