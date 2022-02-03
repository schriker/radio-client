import useStore from '../../store/store';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { SongFragmentFragment } from '../../generated/graphql';

dayjs.extend(duration);

function Timeline({ song }: { song: SongFragmentFragment }) {
  const playerPosition = useStore((state) => state.playerPosition);

  return (
    <div className="space-y-2">
      <div className="bg-zinc-700 rounded-full overflow-hidden">
        <div
          style={{
            width: `${(Math.ceil(playerPosition) / song.lengthSeconds) * 100}%`,
          }}
          className="bg-purple-600 h-2 rounded-full"
          role="progressbar"
          aria-label="music progress"
          aria-valuenow={Math.ceil(playerPosition)}
          aria-valuemin={0}
          aria-valuemax={song.lengthSeconds}
        ></div>
      </div>
      <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
        <div className="text-zinc-100">
          {dayjs.duration(Math.ceil(playerPosition), 'seconds').format('mm:ss')}
        </div>
        <div className="text-zinc-400">
          {dayjs.duration(song.lengthSeconds, 'seconds').format('mm:ss')}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
