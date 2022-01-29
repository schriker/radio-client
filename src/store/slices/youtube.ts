import { GetState, SetState } from 'zustand';
import { StoreState } from '../../types/store';

export const createYoutubeSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => ({
  isPlaying: false,
  isPlayerReady: false,
  playerPosition: 0,
  volume: 1,
  muted: false,
  setMuted: (value: boolean) => set({ muted: value }),
  setPlayerPosition: (position: number) => set({ playerPosition: position }),
  setPlayerReady: (ready: boolean) => set({ isPlayerReady: ready }),
  togglePlayer: (state: boolean) => {
    set({ isPlaying: state });
  },
  initVolume: () => {
    const userSavedVolume = localStorage.getItem('volume');

    if (userSavedVolume) {
      set({ volume: JSON.parse(userSavedVolume).volume });
    }
  },
  setVolume: (value: number) => {
    set({ volume: value });
    localStorage.setItem('volume', JSON.stringify({ volume: value }));
  },
});
