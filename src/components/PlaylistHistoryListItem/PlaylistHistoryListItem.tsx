import dayjs from 'dayjs';
import { PlayListHistoryListItemPropsType } from '../../types/playlistHistory';

function PlaylistHistoryListItem({ song }: PlayListHistoryListItemPropsType) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.youtube.com/watch?v=${song.videoId}`}
      className="group"
    >
      <div className="flex items-center mx-3 px-3 py-3 space-x-3 border-b border-zinc-700 group-hover:bg-zinc-700">
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
        </div>
      </div>
    </a>
  );
}

export default PlaylistHistoryListItem;
