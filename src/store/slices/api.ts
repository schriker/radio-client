import { createClient } from '@supabase/supabase-js';
import { GetState, SetState } from 'zustand';
import dayjs from 'dayjs';
import { ApiState, Song } from '../../types/apiSlice';

const supabase = createClient(
  process.env.REACT_APP_DB_URL as string,
  process.env.REACT_APP_DB_KEY as string
);

export const createApiSlice = (
  set: SetState<ApiState>,
  get: GetState<ApiState>
) => ({
  songs: [],
  fetchSongs: async () => {
    const songsResponse = await supabase
      .from<Song>('songs')
      .select('*')
      .gt('endTime', dayjs().toISOString());
    if (songsResponse.error) {
      console.log(songsResponse);
      return;
    }
    set({ songs: songsResponse.data });

    supabase
      .from<Song>('songs')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            get().pushSong(payload.new);
            break;
          case 'DELETE':
            get().removeSong(payload.old.id);
            break;
          default:
            return;
        }
      })
      .subscribe();
  },
  removeAllSubscriptions: () => supabase.removeAllSubscriptions(),
  pushSong: (song: Song) => set((state) => ({ songs: [...state.songs, song] })),
  removeSong: (id: number) =>
    set((state) => ({
      songs: state.songs.filter((song) => song.id !== id),
    })),
});
