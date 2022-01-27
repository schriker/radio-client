export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Song {
  id: number;
  author: string;
  title: string;
  lengthSeconds: number;
  videoId: string;
  channelId: string;
  viewCount: number;
  thumbnail: {
    thumbnails: Thumbnail[];
  };
  user: string;
  userColor: string;
  startTime: string;
  endTime: string;
}

export interface ApiState {
  songs: Song[];
  fetchSongs: () => void;
  removeAllSubscriptions: () => void;
  pushSong: (song: Song) => void;
  removeSong: (id: number) => void;
}
