import { ApiState } from './store/apiSlice';
import { YoutubeState } from './store/youtubeSlice';

export type StoreState = ApiState & YoutubeState;
