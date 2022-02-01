import { PlusSmIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal';

function Help() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)} className="ml-auto relative group">
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        type="button"
        className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center"
      >
        <PlusSmIcon className="text-zinc-100 w-4" />
      </button>
    </div>
  );
}

export default Help;
