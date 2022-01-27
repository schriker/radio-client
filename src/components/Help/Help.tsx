import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';

function Help() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full w-6 h-6 bg-zinc-500 text-zinc-100 font-semibold text-xs mr-0 absolute right-3 hover:bg-zinc-700"
      >
        ?
      </button>
    </>
  );
}

export default Help;
