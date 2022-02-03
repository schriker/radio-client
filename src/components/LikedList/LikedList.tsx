/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from 'react';
import localforage from 'localforage';
import Placeholder from '../Placeholder/Placeholder';
import PlaylistHistoryListItem from '../PlaylistHistoryListItem/PlaylistHistoryListItem';
import { SaveIcon } from '@heroicons/react/solid';
import { UploadIcon } from '@heroicons/react/outline';
import { SongFragmentFragment } from '../../generated/graphql';
import { FixedSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from '../CustomScrollbars/CustomScrollbars';

function LikedList() {
  const [likedList, setLikedList] = useState<SongFragmentFragment[]>([]);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const fetchLikedList = async () => {
    try {
      const dbKeys = await localforage.keys();
      const likedSongs: SongFragmentFragment[] = [];

      for await (const key of dbKeys) {
        if (key.includes('liked')) {
          const song = await localforage.getItem<SongFragmentFragment>(key);
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

  useEffect(() => {
    fetchLikedList();
  }, []);

  const exportList = () => {
    if (downloadRef.current) {
      const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(likedList));
      downloadRef.current.setAttribute('href', dataStr);
      downloadRef.current.setAttribute('download', 'playlist.json');
      downloadRef.current.click();
    }
  };

  const importList = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = async (fileEvent) => {
        if (fileEvent.target) {
          const importedSongs = JSON.parse(
            fileEvent.target.result as string
          ) as SongFragmentFragment[];
          importedSongs.forEach((song) => {
            localforage.setItem(`liked:${song.id}`, song);
          });
          for await (const song of importedSongs) {
            await localforage.setItem(`liked:${song.id}`, song);
          }
          fetchLikedList();
          event.target.value = '';
        }
      };
    }
  };

  return (
    <>
      <div className="flex mx-4 space-x-2 mb-2 justify-end absolute top-6 right-2 z-20">
        {!!likedList.length && (
          <button
            onClick={exportList}
            className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center"
          >
            <SaveIcon className="text-zinc-100 w-4" />
          </button>
        )}
        <a ref={downloadRef} className="hidden"></a>
        <label
          htmlFor="upload"
          className="rounded-full w-7 h-7 bg-zinc-500 mr-0 hover:bg-zinc-700 flex items-center justify-center cursor-pointer"
        >
          <UploadIcon className="text-zinc-100 w-4" />
        </label>
        <input
          className="hidden"
          onChange={(e) => importList(e)}
          type="file"
          id="upload"
        />
      </div>
      {!!likedList.length ? (
        <List
          itemData={likedList}
          itemCount={likedList.length}
          itemSize={61}
          height={3000}
          width="100%"
          outerElementType={CustomScrollbarsVirtualList}
        >
          {({ data, index, style }) => {
            return (
              <div style={style}>
                <PlaylistHistoryListItem song={data[index]} />
              </div>
            );
          }}
        </List>
      ) : (
        <Placeholder />
      )}
    </>
  );
}

export default LikedList;
