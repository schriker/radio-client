export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Notification {
  id: number;
  text: string;
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
  loading: boolean;
  hasMore: boolean;
  songs: Song[];
  liked: number[];
  history: Song[];
  notifications: Notification[];
  fetchHistory: (time?: string) => void;
  fetchSongs: () => void;
  removeAllSubscriptions: () => void;
  pushSong: (song: Song) => void;
  removeSong: (id: number) => void;
  resetHasMore: () => void;
  subscribeNotifications: () => void;
  subscribeSongs: () => void;
  addLiked: (id: number) => void;
  removeLiked: (id: number) => void;
}
