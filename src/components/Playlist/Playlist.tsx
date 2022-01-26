import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { Scrollbars } from 'react-custom-scrollbars';

function Playlist() {
  return (
    <Scrollbars autoHide>
      <PlaylistItem />
    </Scrollbars>
  );
}

export default Playlist;
