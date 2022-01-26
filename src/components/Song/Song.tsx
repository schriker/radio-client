import useStore from '../../store/store';

function Song() {
  const song = useStore((state) => state.songs[0]);

  return (
    <div className="flex items-center space-x-4 mb-8">
      <div
        className="flex-none rounded-lg bg-zinc-900 w-24 h-24 bg-cover"
        style={{
          backgroundImage: `url(${song.thumbnail.thumbnails[2].url})`,
        }}
      ></div>
      <div className="min-w-0 flex-auto space-y-1 font-semibold">
        <p className="text-purple-400 text-sm leading-6">{song.user}</p>
        <h2 className="text-zinc-400 text-sm truncate leading-6">
          {song.author}
        </h2>
        <p className="text-zinc-50 text-lg truncate">{song.title}</p>
      </div>
    </div>
  );
}

export default Song;
