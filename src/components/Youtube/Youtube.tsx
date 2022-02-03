import dayjs from 'dayjs';
import useStore from '../../store/store';
import ReactPlayer from 'react-player';
import { PlayerState } from '../../types/youtube';
import { useEffect, useRef } from 'react';
import { useSongsQuery } from '../../generated/graphql';

function Youtube() {
  const { data, refetch, updateQuery } = useSongsQuery();
  const song = data?.songs[0]!;
  const setPlayerReady = useStore((state) => state.setPlayerReady);
  const togglePlayer = useStore((state) => state.togglePlayer);
  const isPlaying = useStore((state) => state.isPlaying);
  const setPlayerPosition = useStore((state) => state.setPlayerPosition);
  const muted = useStore((state) => state.muted);
  const volume = useStore((state) => state.volume);
  const ref = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const time = dayjs().diff(song.startTime, 'second');
      if (time > song.lengthSeconds) {
        refetch();
      } else {
        ref.current?.seekTo(time);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const onPlayerReady = () => {
    const time = dayjs().diff(song.startTime, 'second');
    if (time < song.lengthSeconds) {
      ref.current?.seekTo(time);
    }
    setPlayerReady(true);
  };

  const onEnded = () => {
    updateQuery((data) => {
      return Object.assign({}, data, {
        songs: data.songs.filter((cacheSong) => cacheSong.id !== song.id),
      });
    });
  };

  const onPause = () => {
    togglePlayer(false);
  };

  const onPlay = () => {
    togglePlayer(true);
  };

  const onProgress = (state: PlayerState) => {
    setPlayerPosition(state.playedSeconds);
  };

  return song ? (
    <div className="hidden">
      <ReactPlayer
        ref={ref}
        volume={muted ? 0 : volume}
        playing={isPlaying}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
        onReady={onPlayerReady}
        onProgress={onProgress}
        url={`https://www.youtube.com/watch?v=${song.videoId}`}
      />
    </div>
  ) : null;
}

export default Youtube;
