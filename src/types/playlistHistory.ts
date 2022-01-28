import { Song } from './apiSlice';

export type PlaylistHistoryPropsType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export type PlayListHistoryListItemPropsType = {
  song: Song;
};
