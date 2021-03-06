import { HeartIcon } from '@heroicons/react/solid';
import localforage from 'localforage';
import { useEffect } from 'react';
import useStore from '../../store/store';
import { LikePropsType } from '../../types/like';

function Like({ song, small = false }: LikePropsType) {
  const liked = useStore((store) => store.liked);
  const removeLiked = useStore((store) => store.removeLiked);
  const addLiked = useStore((store) => store.addLiked);

  const handleClick = async () => {
    try {
      const songExists = await localforage.getItem(`liked:${song.id}`);
      if (!songExists) {
        await localforage.setItem(`liked:${song.id}`, song);
        addLiked(song.id);
      } else {
        await localforage.removeItem(`liked:${song.id}`);
        removeLiked(song.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleLiked = async () => {
      try {
        const songExists = await localforage.getItem(`liked:${song.id}`);
        if (!songExists) {
          removeLiked(song.id);
        } else {
          addLiked(song.id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleLiked();
  }, [song, addLiked, removeLiked]);

  return (
    <button
      onClick={handleClick}
      className={`${small ? 'w-4' : 'w-6'} ${
        liked.includes(song.id)
          ? 'hover:text-purple-600'
          : 'hover:text-purple-300'
      } ${
        liked.includes(song.id) ? 'text-purple-600' : 'text-zinc-200'
      } cursor-pointer transform transition-all hover:scale-150`}
    >
      <HeartIcon />
    </button>
  );
}

export default Like;
