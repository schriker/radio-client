import dayjs from 'dayjs';
import { PlaylistItemPropsType } from '../../types/playlist';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function PlaylistItem({ song }: PlaylistItemPropsType) {
  return (
    <div className="flex items-center px-8 py-3 space-x-4 border-b border-zinc-700">
      <div
        className="flex-none rounded-lg bg-zinc-900 w-12 h-12 bg-cover"
        style={{
          backgroundImage: `url(${song.thumbnail.thumbnails[0].url})`,
        }}
      ></div>
      <div className="min-w-0 flex-auto font-medium">
        <h2 className="text-zinc-400 text-xs truncate mb-1">{song.author}</h2>
        <p className="text-zinc-50 text-xs truncate">{song.title}</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="text-purple-400 text-xs">{song.user}</p>
        <p className="text-zinc-400 text-xs">&middot;</p>
        <p className="text-zinc-400 text-xs">
          {dayjs.duration(song.lengthSeconds, 'seconds').format('mm:ss')}
        </p>
      </div>
    </div>
  );
}

export default PlaylistItem;
