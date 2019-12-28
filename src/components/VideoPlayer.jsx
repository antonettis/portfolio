import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { isIOS } from "react-device-detect";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const videoUrl = this.props.videoUrl;
    const folderSrc = this.props.folderSrc;
    const videoJsOptions = {
      autoPlay: true,
      controls: isIOS,
      loop: true,
      muted: true,
      preload: 'auto',
      aspectratio: "2:1.5"
    };

    return (
      <div className="video-wrapper">
        <div data-vjs-player>
          <video
            {...videoJsOptions}
            ref={node => (this.videoNode = node)}
            className="video-js"
            src={require(`../img${folderSrc}/${videoUrl}.mp4`)}
            type="video/mp4"
            poster={require(`../img${folderSrc}/${videoUrl}.jpg`)}
          ></video>
        </div>
      </div>
    );
  }
}
