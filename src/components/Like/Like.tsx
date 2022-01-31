import { HeartIcon } from '@heroicons/react/solid';
import localforage from 'localforage';
import { useEffect, useState } from 'react';
import useStore from '../../store/store';
import { LikePropsType } from '../../types/like';

function Like({ song, small = false }: LikePropsType) {
  const setUnliked = useStore((state) => state.setUnliked);
  const unliked = useStore((state) => state.unliked);
  const [liked, setLiked] = useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const songExists = await localforage.getItem(`liked:${song.id}`);
      if (!songExists) {
        await localforage.setItem(`liked:${song.id}`, song);
        setLiked(true);
      } else {
        await localforage.removeItem(`liked:${song.id}`);
        setUnliked(song.id);
        setLiked(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (unliked === song.id) {
      setLiked(false);
    }
  }, [unliked, song.id]);

  useEffect(() => {
    const handleLiked = async () => {
      try {
        const songExists = await localforage.getItem(`liked:${song.id}`);
        if (!songExists) {
          setLiked(false);
        } else {
          setLiked(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleLiked();
  }, [song]);

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`${small ? 'w-4' : 'w-6'} ${
        liked ? 'hover:text-purple-600' : 'hover:text-purple-300'
      } ${
        liked ? 'text-purple-600' : 'text-zinc-200'
      } cursor-pointer transform transition-all hover:scale-150`}
    >
      <HeartIcon />
    </button>
  );
}

export default Like;
