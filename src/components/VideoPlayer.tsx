import tuvaluVideo from '../assets/Tuvalu.mp4';
import './VideoPlayer.css';

function VideoPlayer() {
  return (
    <div className="video-container">
      <video 
        className="video-player" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={tuvaluVideo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoPlayer;