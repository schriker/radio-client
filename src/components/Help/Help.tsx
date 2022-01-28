import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';

function Help() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto relative">
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <span
        onClick={() => setIsOpen(true)}
        className="text-zinc-100 hidden sm:inline-block mr-2 hover:underline"
      >
        Dodaj utwór
      </span>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full w-7 h-7 bg-zinc-500 text-zinc-100 font-semibold text-xs mr-0 hover:bg-zinc-700"
      >
        ?
      </button>
    </div>
  );
}

export default Help;
