function Song() {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <img
        src="https://tailwindcss.com/_next/static/media/full-stack-radio.485d0b2c6e3aa1cacc6b50e462cd3675.png"
        alt=""
        width="88"
        height="88"
        className="flex-none rounded-lg bg-zinc-100"
      />
      <div className="min-w-0 flex-auto space-y-1 font-semibold">
        <p className="text-purple-400 text-sm leading-6">schriker</p>
        <h2 className="text-zinc-400 text-sm truncate leading-6">
          Scaling CSS at Heroku with Utility
        </h2>
        <p className="text-zinc-50 text-lg">Full Stack Radio</p>
      </div>
    </div>
  );
}

export default Song;
