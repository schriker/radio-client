import { createClient } from '@supabase/supabase-js';
import { GetState, SetState } from 'zustand';
import dayjs from 'dayjs';
import { Song, Notification } from '../../types/apiSlice';
import { StoreState } from '../../types/store';

const supabase = createClient(
  process.env.REACT_APP_DB_URL as string,
  process.env.REACT_APP_DB_KEY as string
);

export const createApiSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => ({
  loading: false,
  hasMore: true,
  notifications: [],
  songs: [],
  history: [],
  fetchHistory: async (time?: string) => {
    set({ loading: true });
    const history = await supabase
      .from<Song>('songs')
      .select('*')
      .lt('endTime', time ? time : dayjs().toISOString())
      .limit(100)
      .order('id', { ascending: false });
    set({ loading: false });
    if (history.error) {
      console.log(history);
      return;
    }

    if (history.data.length < 100) {
      set({ hasMore: false });
    }

    if (time) {
      set((state) => ({ history: [...state.history, ...history.data] }));
    } else {
      set({ history: history.data });
    }
  },
  fetchSongs: async () => {
    const songsResponse = await supabase
      .from<Song>('songs')
      .select('*')
      .gt('endTime', dayjs().toISOString())
      .order('id', { ascending: true });

    if (songsResponse.error) {
      console.log(songsResponse);
      return;
    }
    set({ songs: songsResponse.data });
  },
  removeAllSubscriptions: () => supabase.removeAllSubscriptions(),
  pushSong: (song: Song) => set((state) => ({ songs: [...state.songs, song] })),
  removeSong: (id: number) =>
    set((state) => ({
      songs: state.songs.filter((song) => song.id !== id),
    })),
  resetHasMore: () => set({ hasMore: true }),
  subscribeSongs: async () => {
    supabase
      .from<Song>('songs')
      .on('*', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            get().pushSong(payload.new);
            set((state) => ({
              notifications: [
                ...state.notifications,
                {
                  id: payload.new.id,
                  text: `${payload.new.user} - "${payload.new.author} - ${payload.new.title}"`,
                },
              ],
            }));
            console.log('Push', payload);
            break;
          case 'DELETE':
            get().fetchSongs();
            set({ notifications: [] });
            console.log('Skip', payload);
            break;
          default:
            return;
        }
      })
      .subscribe();
  },
  subscribeNotifications: async () => {
    supabase
      .from<Notification>('notifications')
      .on('INSERT', (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            set((state) => ({
              notifications: [...state.notifications, payload.new],
            }));
            console.log('Notification', payload);
            break;
          default:
            return;
        }
      })
      .subscribe();
  },
});
