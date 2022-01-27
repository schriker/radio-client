export interface YoutubeState {
  isPlaying: boolean;
  isPlayerReady: boolean;
  playerPosition: number;
  setPlayerPosition: (position: number) => void;
  setPlayerReady: (ready: boolean) => void;
  togglePlayer: (state: boolean) => void;
}
