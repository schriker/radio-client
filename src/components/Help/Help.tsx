import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';

function Help() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)} className="ml-auto relative group">
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        type="button"
        className="rounded-md px-2 h-7 bg-zinc-500 text-zinc-100 font-semibold text-xs mr-0 group-hover:bg-zinc-700"
      >
        Dodaj utwór
      </button>
    </div>
  );
}

export default Help;
