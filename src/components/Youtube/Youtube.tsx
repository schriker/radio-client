import dayjs from 'dayjs';
import useStore from '../../store/store';
import ReactPlayer from 'react-player';
import { PlayerState } from '../../types/youtube';
import { useEffect, useRef } from 'react';

function Youtube() {
  const song = useStore((state) => state.songs[0]);
  const removeSong = useStore((state) => state.removeSong);
  const setPlayerReady = useStore((state) => state.setPlayerReady);
  const togglePlayer = useStore((state) => state.togglePlayer);
  const isPlaying = useStore((state) => state.isPlaying);
  const setPlayerPosition = useStore((state) => state.setPlayerPosition);
  const removeAllSubscriptions = useStore(
    (state) => state.removeAllSubscriptions
  );
  const fetchSongs = useStore((state) => state.fetchSongs);
  const volume = useStore((state) => state.volume);
  const ref = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const time = dayjs().diff(song.startTime, 'second');
      if (time > song.lengthSeconds) {
        removeAllSubscriptions();
        fetchSongs();
      } else {
        ref.current?.seekTo(time);
      }
    }
  }, [isPlaying, song, fetchSongs, removeAllSubscriptions]);

  const onPlayerReady = () => {
    const time = dayjs().diff(song.startTime, 'second');
    if (time < song.lengthSeconds) {
      ref.current?.seekTo(time);
    }
    setPlayerReady(true);
  };

  const onEnded = () => {
    removeSong(song.id);
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

  return (
    <div className="hidden">
      <ReactPlayer
        ref={ref}
        volume={volume}
        playing={isPlaying}
        onPause={onPause}
        onPlay={onPlay}
        onEnded={onEnded}
        onReady={onPlayerReady}
        onProgress={onProgress}
        url={`https://www.youtube.com/watch?v=${song.videoId}`}
      />
    </div>
  );
}

export default Youtube;
