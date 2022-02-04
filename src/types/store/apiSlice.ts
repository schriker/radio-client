export interface ApiState {
  liked: number[];
  searchValue: string | null;
  setSearchValue: (value: string | null) => void;
  addLiked: (id: number) => void;
  removeLiked: (id: number) => void;
}
