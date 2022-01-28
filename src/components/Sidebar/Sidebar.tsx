import { useState } from 'react';
import SidebarIcon from '../Icons/SidebarIcon';
import PlaylistHistory from '../PlaylistHistory/PlaylistHistory';

function Sidebar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PlaylistHistory isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center"
      >
        <SidebarIcon />
      </button>
    </>
  );
}

export default Sidebar;
