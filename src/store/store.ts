import create from 'zustand';
import { StoreState } from '../types/store';
import { createApiSlice } from './slices/api';

const useStore = create<StoreState>((set, get) => ({
  ...createApiSlice(set, get),
}));

export default useStore;
