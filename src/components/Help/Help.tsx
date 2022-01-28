import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';

function Help() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto relative">
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <span className="animate-ping z-10 absolute inline-flex h-full w-full rounded-full bg-red-600"></span>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative z-20 rounded-full w-7 h-7 bg-zinc-500 text-zinc-100 font-semibold text-xs mr-0 hover:bg-zinc-700"
      >
        ?
      </button>
    </div>
  );
}

export default Help;
