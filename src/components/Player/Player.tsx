import {
  SongsDocument,
  SongsQuery,
  useBotSongsSkippedSubscription,
  useSongAddedSubscription,
  useSongSkippedSubscription,
  useSongsQuery,
} from '../../generated/graphql';
import Placeholder from '../Placeholder/Placeholder';
import Playlist from '../Playlist/Playlist';
import Song from '../Song/Song';
import Timeline from '../Timeline/Timeline';

function Player() {
  const { loading, data, error, refetch } = useSongsQuery();
  useSongAddedSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      client.cache.updateQuery<SongsQuery, SongsQuery>(
        { query: SongsDocument },
        (data) => {
          if (!data || !subscriptionData.data) return;
          return Object.assign({}, data, {
            songs: [...data.songs, subscriptionData.data.songAdded],
          });
        }
      );
    },
  });

  useSongSkippedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData.data) {
        refetch();
      }
    },
  });

  useBotSongsSkippedSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData.data) {
        refetch();
      }
    },
  });

  if (loading || error) return <Placeholder />;
  if (data?.songs.length === 0 || !data?.songs) return <Placeholder />;

  const [currentSong, ...songs] = data?.songs;

  return (
    <>
      <div className="px-8 py-8 border-b border-zinc-700">
        <Song song={currentSong} />
        <Timeline song={currentSong} />
      </div>
      <Playlist songs={songs} />
    </>
  );
}

export default Player;
