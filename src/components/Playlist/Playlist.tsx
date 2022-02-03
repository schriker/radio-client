import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { FixedSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from '../CustomScrollbars/CustomScrollbars';
import { SongFragmentFragment } from '../../generated/graphql';

function Playlist({ songs }: { songs: SongFragmentFragment[] }) {
  return (
    <List
      itemData={songs}
      itemCount={songs.length}
      itemSize={73}
      height={3000}
      width="100%"
      outerElementType={CustomScrollbarsVirtualList}
    >
      {({ data, index, style }) => {
        return (
          <div style={style}>
            <PlaylistItem song={data[index]} />
          </div>
        );
      }}
    </List>
  );
}

export default Playlist;
