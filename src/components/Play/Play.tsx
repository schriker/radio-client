import PauseIcon from '../Icons/PauseIcon';
import PlayIcon from '../Icons/PlayIcon';

function Play() {
  return (
    <button
      type="button"
      aria-label="Play"
      className="bg-zinc-100 -mt-10 mb-2 w-20 h-20 rounded-full drop-shadow-md flex justify-center items-center"
    >
      <PlayIcon />
      {/* <PauseIcon /> */}
    </button>
  );
}

export default Play;
