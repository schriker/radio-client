import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { FixedSizeList as List } from 'react-window';
import { SongFragmentFragment } from '../../generated/graphql';
import CustomScrollbarsVirtualList from '../CustomScrollbarsPlayer/CustomScrollbarsPlayer';

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
          <div
            style={{
              ...style,
              top: `${
                (style.top ? parseFloat(style.top as string) : 0) + 36
              }px`,
            }}
          >
            <PlaylistItem song={data[index]} />
          </div>
        );
      }}
    </List>
  );
}

export default Playlist;
