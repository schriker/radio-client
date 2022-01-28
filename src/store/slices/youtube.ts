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
  setPlayerPosition: (position: number) => set({ playerPosition: position }),
  setPlayerReady: (ready: boolean) => set({ isPlayerReady: ready }),
  togglePlayer: (state: boolean) => {
    set({ isPlaying: state });
  },
  setVolume: (value: number) => set({ volume: value }),
});