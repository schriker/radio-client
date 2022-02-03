export interface ApiState {
  liked: number[];
  addLiked: (id: number) => void;
  removeLiked: (id: number) => void;
}
