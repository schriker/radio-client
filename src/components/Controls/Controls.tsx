import Help from '../Help/Help';
import Play from '../Play/Play';

function Controls() {
  return (
    <div className="bg-zinc-600 border-zinc-500 border-t flex items-center justify-center lg:rounded-b-xl relative">
      <Play />
      <Help />
    </div>
  );
}

export default Controls;
