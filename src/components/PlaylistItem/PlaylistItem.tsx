function PlaylistItem() {
  return (
    <div className="flex items-center px-8 py-3 space-x-4 border-b border-zinc-700">
      <img
        src="https://tailwindcss.com/_next/static/media/full-stack-radio.485d0b2c6e3aa1cacc6b50e462cd3675.png"
        alt=""
        width="44"
        height="44"
        className="flex-none rounded-sm bg-zinc-100"
      />
      <div className="min-w-0 flex-auto font-medium">
        <h2 className="text-zinc-400 text-xs truncate mb-1">
          Scaling CSS at Heroku with Utility
        </h2>
        <p className="text-zinc-50 text-xs">Full Stack Radio</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="text-purple-400 text-xs">schriker</p>
        <p className="text-zinc-400 text-xs">&middot;</p>
        <p className="text-zinc-400 text-xs">75:50</p>
      </div>
    </div>
  );
}

export default PlaylistItem;
