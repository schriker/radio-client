/* eslint-disable @typescript-eslint/no-unused-vars */
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { Scrollbars } from 'react-custom-scrollbars';
import useStore from '../../store/store';

function Playlist() {
  const [_, ...songs] = useStore((state) => state.songs);

  return (
    <Scrollbars style={{ minHeight: '70px' }}>
      {songs.map((song) => (
        <PlaylistItem key={song.videoId} song={song} />
      ))}
    </Scrollbars>
  );
}

export default Playlist;
