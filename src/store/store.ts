import create from 'zustand';
import { StoreState } from '../types/store';
import { createApiSlice } from './slices/api';
import { createYoutubeSlice } from './slices/youtube';

const useStore = create<StoreState>((set, get) => ({
  ...createApiSlice(set, get),
  ...createYoutubeSlice(set, get),
}));

export default useStore;
