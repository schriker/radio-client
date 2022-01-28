export interface YoutubeState {
  isPlaying: boolean;
  isPlayerReady: boolean;
  playerPosition: number;
  volume: number;
  setVolume: (value: number) => void;
  setPlayerPosition: (position: number) => void;
  setPlayerReady: (ready: boolean) => void;
  togglePlayer: (state: boolean) => void;
}
