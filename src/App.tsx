import { useEffect } from 'react';
import Controls from './components/Controls/Controls';
import Notifications from './components/Notifications/Notifications';
import Placeholder from './components/Placeholder/Placeholder';
import Player from './components/Player/Player';
import useStore from './store/store';

function App() {
  const fetchSongs = useStore((state) => state.fetchSongs);
  const initVolume = useStore((state) => state.initVolume);
  const songs = useStore((state) => state.songs);
  const removeAllSubscriptions = useStore(
    (state) => state.removeAllSubscriptions
  );
  const subscribeNotifications = useStore(
    (state) => state.subscribeNotifications
  );
  useEffect(() => {
    fetchSongs();
    initVolume();
    subscribeNotifications();
    return () => {
      removeAllSubscriptions();
    };
  }, [fetchSongs, removeAllSubscriptions, initVolume, subscribeNotifications]);

  return (
    <div className="container mx-auto max-w-5xl lg:py-14 fixed top-0 bottom-0 sm:relative sm:h-screen overflow-auto bg-zinc-800 sm:bg-opacity-0">
      <Notifications />
      <div className="bg-zinc-800 lg:rounded-xl flex flex-col h-full">
        {!!songs.length ? <Player /> : <Placeholder />}
        <Controls />
      </div>
    </div>
  );
}

export default App;
