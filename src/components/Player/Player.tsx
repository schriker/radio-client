import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';
import Song from '../Song/Song';
import Timeline from '../Timeline/Timeline';

function Player() {
  return (
    <>
      <div className="px-8 py-8 border-b border-zinc-700">
        <Song />
        <Timeline />
      </div>
      <Playlist />
      <Controls />
    </>
  );
}

export default Player;
