function Timeline() {
  return (
    <div className="space-y-2">
      <div className="bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="bg-purple-600 w-1/2 h-2 rounded-full"
          role="progressbar"
          aria-label="music progress"
          aria-valuenow={1456}
          aria-valuemin={0}
          aria-valuemax={4550}
        ></div>
      </div>
      <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
        <div className="text-zinc-100">24:16</div>
        <div className="text-zinc-400">75:50</div>
      </div>
    </div>
  );
}

export default Timeline;
