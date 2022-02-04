import { GetState, SetState } from 'zustand';
import { StoreState } from '../../types/store';

export const createApiSlice = (
  set: SetState<StoreState>,
  _: GetState<StoreState>
) => ({
  liked: [],
  searchValue: null,
  addLiked: (id: number) => set((state) => ({ liked: [...state.liked, id] })),
  removeLiked: (id: number) =>
    set((state) => ({
      liked: state.liked.filter((likedId) => likedId !== id),
    })),
  setSearchValue: (value: string | null) => set({ searchValue: value }),
});
