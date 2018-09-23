import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-control';
import { FormattedTime } from '../../libs/utils';
import ProgressBar from '../components/progressBar';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/full-screen';
import { connect } from 'react-redux';

class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
    progressValue: 0,
    progressBarMax: 0,
    lastVolume: 0,
    currentVolume: 1,
    loading: false,
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

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumenChange = event => {
    this.video.volume = event.target.value;
    this.setState({
      currentVolume: this.video.volume,
    })
  }
  handleToggleMute = event => {
    this.setState({
      lastVolume: this.video.volume,
      volume: this.video.volume >= 0 ? 0 : this.state.lastVolume,
      currentVolume: this.state.lastVolume
    })
    this.video.volume = this.state.lastVolume;
  }
  setRefVideoPlayer = element => {
    this.player = element
  }
  handleFullScreenClick = event => {
    if (document.mozFullScreen) {
      document.mozCancelFullScreen();
    }
    else if (document.webkitIsFullScreen) {
      document.webkitExitFullscreen();
    }
    else if (this.player.mozRequestFullScreen) {
      this.player.mozRequestFullScreen();
    }
    else if (this.player.webkitRequestFullscreen) {
      this.player.webkitRequestFullscreen(); 
    }
  }
  render() { 
    return ( 
      <VideoPlayerLayout
        setRef={this.setRefVideoPlayer}
      >
        <Title 
          title={this.props.media.get('title')}
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
          <Volumen 
            handleVolumenChange={this.handleVolumenChange}
            handleToggleMute={this.handleToggleMute}
            volume={this.state.currentVolume}
          />
          <FullScreen 
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetada={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
        <Spinner
          active={this.state.loading}
        />
      </VideoPlayerLayout>
     )
  }
}

function mapStateToProps(state, props) {
  return {
    media: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(VideoPlayer);