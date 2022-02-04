// @ts-nocheck
import { useSongsHistoryQuery } from '../../generated/graphql';
import Placeholder from '../Placeholder/Placeholder';
import PlaylistHistoryListItem from '../PlaylistHistoryListItem/PlaylistHistoryListItem';
import { FixedSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from '../CustomScrollbars/CustomScrollbars';
function PlaylistHistoryList() {
  const { data, loading, error, fetchMore } = useSongsHistoryQuery({
    fetchPolicy: 'network-only',
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        endTime: data?.songsHistory[data?.songsHistory.length - 1].endTime,
      },
    });
  };

  if (error) return <Placeholder />;
  if (data?.songsHistory.length === 0 || !data?.songsHistory)
    return <Placeholder />;

  return (
    <>
      <List
        itemData={data.songsHistory}
        itemCount={data.songsHistory.length + 1}
        itemSize={61}
        height={3000}
        width="100%"
        outerElementType={CustomScrollbarsVirtualList}
      >
        {({ data: scollData, index, style }) => {
          return (
            <div style={style}>
              {index === data.songsHistory.length ? (
                <div className="flex justify-center mt-4">
                  <button
                    disabled={loading}
                    onClick={loadMore}
                    type="button"
                    className="rounded-md px-2 h-7 bg-zinc-500 text-zinc-100 font-semibold text-xs mr-0 hover:bg-zinc-700"
                  >
                    Starsze
                  </button>
                </div>
              ) : (
                <PlaylistHistoryListItem song={scollData[index]} />
              )}
            </div>
          );
        }}
      </List>
    </>
  );
}

export default PlaylistHistoryList;
