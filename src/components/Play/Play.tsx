import useStore from '../../store/store';
import PauseIcon from '../Icons/PauseIcon';
import PlayIcon from '../Icons/PlayIcon';

function Play() {
  const isPlaying = useStore((state) => state.isPlaying);
  const isPlayerReady = useStore((state) => state.isPlayerReady);
  const togglePlayer = useStore((state) => state.togglePlayer);

  const handleClick = () => {
    if (isPlayerReady) {
      togglePlayer(!isPlaying);
    }
  };

  return (
    <button
      type="button"
      aria-label="Play"
      className="bg-zinc-100 -mt-10 mb-2 w-20 h-20 rounded-full drop-shadow-md flex justify-center items-center"
      onClick={handleClick}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

export default Play;
