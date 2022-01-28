import { useEffect } from 'react';
import Controls from './components/Controls/Controls';
import Placeholder from './components/Placeholder/Placeholder';
import Player from './components/Player/Player';
import useStore from './store/store';

function App() {
  const fetchSongs = useStore((state) => state.fetchSongs);
  const songs = useStore((state) => state.songs);
  const removeAllSubscriptions = useStore(
    (state) => state.removeAllSubscriptions
  );
  useEffect(() => {
    fetchSongs();

    return () => {
      removeAllSubscriptions();
    };
  }, [fetchSongs, removeAllSubscriptions]);

  return (
    <div
      className="container mx-auto max-w-5xl lg:py-14 fixed top-0 bottom-0 sm:relative sm:h-screen"
      id="body-content"
    >
      <div className="bg-zinc-800 lg:rounded-xl flex flex-col h-full">
        {!!songs.length ? <Player /> : <Placeholder />}
        <Controls />
      </div>
    </div>
  );
}

export default App;