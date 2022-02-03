import { useEffect } from 'react';
import Controls from './components/Controls/Controls';
import Notifications from './components/Notifications/Notifications';
import Player from './components/Player/Player';
import useStore from './store/store';

function App() {
  const initVolume = useStore((state) => state.initVolume);

  useEffect(() => {
    initVolume();
  }, [initVolume]);

  return (
    <div className="container mx-auto max-w-5xl lg:py-14 fixed top-0 bottom-0 sm:relative sm:h-screen overflow-auto bg-zinc-800 sm:bg-opacity-0">
      <Notifications />
      <div className="bg-zinc-800 lg:rounded-xl flex flex-col h-full">
        <Player />
        <Controls />
      </div>
    </div>
  );
}

export default App;
