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
      disabled={!isPlayerReady}
      type="button"
      aria-label="Play"
      className="bg-zinc-100 ml-2 mb-2 mt-2 w-12 h-12 rounded-full drop-shadow-md flex justify-center items-center transform transition-transform ease-out disabled:scale-0 hover:bg-zinc-200 hover:drop-shadow-none sm:w-20 sm:h-20 sm:-mt-10"
      onClick={handleClick}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

export default Play;
