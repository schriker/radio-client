import dayjs from 'dayjs';
import { PlayListHistoryListItemPropsType } from '../../types/playlistHistory';
import Like from '../Like/Like';

function PlaylistHistoryListItem({ song }: PlayListHistoryListItemPropsType) {
  return (
    <div className="flex flex-auto items-center mx-3 px-3 py-3 space-x-3 border-b border-zinc-700 hover:bg-zinc-700 max-w-full">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.youtube.com/watch?v=${song.videoId}`}
        className="flex flex-auto items-center space-x-3 truncate"
      >
        <div
          className="flex-none rounded-lg bg-zinc-900 w-8 h-8 bg-cover bg-center"
          style={{
            backgroundImage: `url(${song.thumbnail.thumbnails[0].url})`,
          }}
        ></div>
        <div className="min-w-0 flex-auto font-medium">
          <h2 className="text-zinc-400 text-xs truncate mb-1">{song.author}</h2>
          <p className="text-zinc-50 text-xs truncate">{song.title}</p>
        </div>
        <div className="flex space-x-3 items-center">
          <p className="text-purple-400 text-xs">{song.user}</p>
          <p className="text-zinc-400 text-xs">&middot;</p>
          <p
            className="text-zinc-400 text-xs"
            title={dayjs(song.startTime).format('DD.MM.YYYY - HH:mm:ss')}
          >
            {dayjs.duration(song.lengthSeconds, 'seconds').format('mm:ss')}
          </p>
          <p className="text-zinc-400 text-xs">&middot;</p>
        </div>
      </a>
      <div>
        <Like song={song} small />
      </div>
    </div>
  );
}

export default PlaylistHistoryListItem;
