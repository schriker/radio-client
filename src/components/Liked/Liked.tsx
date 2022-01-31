import { HeartIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import LikedList from '../LikedList/LikedList';
import Sidebar from '../Sidebar/Sidebar';

function Liked() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar title="Ulubione" isOpen={isOpen} setIsOpen={setIsOpen}>
        <LikedList />
      </Sidebar>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center"
      >
        <HeartIcon className="text-zinc-100 w-4" />
      </button>
    </>
  );
}

export default Liked;
