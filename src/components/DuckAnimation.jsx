import {Player} from '@lottiefiles/react-lottie-player';
import sticker from '../public/animation/DUCK_HEY.json';
function DuckAnimation() {
  return (
    <div className="w-60 h-60">
      <Player
        autoplay
        loop
        src={sticker} // JSON fayling manzili
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}

export default DuckAnimation;
