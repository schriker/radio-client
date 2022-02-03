export interface YoutubeState {
  isPlaying: boolean;
  isPlayerReady: boolean;
  playerPosition: number;
  volume: number;
  muted: boolean;
  setMuted: (value: boolean) => void;
  setVolume: (value: number) => void;
  setPlayerPosition: (position: number) => void;
  setPlayerReady: (ready: boolean) => void;
  togglePlayer: (state: boolean) => void;
  initVolume: () => void;
}
