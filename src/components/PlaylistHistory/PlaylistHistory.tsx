import { useState } from 'react';
import PlaylistHistoryIcon from '../Icons/PlaylistHistoryIcon';
import PlaylistHistoryList from '../PlaylistHistoryList/PlaylistHistoryList';
import PlaylistHistoryTitle from '../PlaylistHistoryTitle/PlaylistHistoryTitle';
import Sidebar from '../Sidebar/Sidebar';

function PlaylistHistory() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar
        title={PlaylistHistoryTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <PlaylistHistoryList />
      </Sidebar>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center"
      >
        <PlaylistHistoryIcon />
      </button>
    </>
  );
}

export default PlaylistHistory;
