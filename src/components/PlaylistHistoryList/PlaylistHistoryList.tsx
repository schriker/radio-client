import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import useStore from '../../store/store';
import Placeholder from '../Placeholder/Placeholder';
import PlaylistHistoryListItem from '../PlaylistHistoryListItem/PlaylistHistoryListItem';

function PlaylistHistoryList() {
  const fetchHistory = useStore((state) => state.fetchHistory);
  const history = useStore((state) => state.history);
  const loading = useStore((state) => state.loading);
  const hasMore = useStore((state) => state.hasMore);
  const resetHasMore = useStore((state) => state.resetHasMore);

  useEffect(() => {
    fetchHistory();
    return () => {
      resetHasMore();
    };
  }, [fetchHistory, resetHasMore]);

  const loadMore = () => {
    fetchHistory(history[history.length - 1].endTime);
  };

  return !!history.length ? (
    <Scrollbars>
      {history.map((song) => (
        <PlaylistHistoryListItem song={song} key={song.id} />
      ))}
      {hasMore && (
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
      )}
    </Scrollbars>
  ) : (
    <Placeholder />
  );
}

export default PlaylistHistoryList;
