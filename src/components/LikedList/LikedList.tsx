import { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Song } from '../../types/apiSlice';
import localforage from 'localforage';
import Placeholder from '../Placeholder/Placeholder';
import PlaylistHistoryListItem from '../PlaylistHistoryListItem/PlaylistHistoryListItem';

function LikedList() {
  const [likedList, setLikedList] = useState<Song[]>([]);

  useEffect(() => {
    const fetchLikedList = async () => {
      try {
        const dbKeys = await localforage.keys();
        const likedSongs: Song[] = [];

        for await (const key of dbKeys) {
          if (key.includes('liked')) {
            const song = await localforage.getItem<Song>(key);
            if (song) likedSongs.push(song);
          }
        }

        if (likedSongs.length) {
          setLikedList(likedSongs);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLikedList();
  }, []);

  return !!likedList.length ? (
    <Scrollbars>
      {likedList.map((song) => (
        <PlaylistHistoryListItem song={song} key={song.id} />
      ))}
    </Scrollbars>
  ) : (
    <Placeholder />
  );
}

export default LikedList;
