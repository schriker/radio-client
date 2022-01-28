import Help from '../Help/Help';
import Play from '../Play/Play';
import Sidebar from '../Sidebar/Sidebar';
import Volume from '../Volume/Volume';

function Controls() {
  return (
    <div className="bg-zinc-600 border-zinc-500 px-3 border-t grid grid-cols-[auto_1fr_auto] relative sm:grid-cols-[1fr_auto_1fr] items-center lg:rounded-b-xl w-full">
      <Volume />
      <Play />
      <div className="flex items-center space-x-2">
        <Help />
        <Sidebar />
      </div>
    </div>
  );
}

export default Controls;
