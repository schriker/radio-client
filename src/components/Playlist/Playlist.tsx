import PlaylistItem from '../PlaylistItem/PlaylistItem';
import useStore from '../../store/store';
import { FixedSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from '../CustomScrollbars/CustomScrollbars';

function Playlist() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, ...songs] = useStore((state) => state.songs);

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
