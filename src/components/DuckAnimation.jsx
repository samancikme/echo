import {Player} from '@lottiefiles/react-lottie-player';

function DuckAnimation() {
  return (
    <div className="w-60 h-60">
      <Player
        autoplay
        loop
        src="/animation/DUCK_HEY.json" // JSON fayling manzili
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}

export default DuckAnimation;
