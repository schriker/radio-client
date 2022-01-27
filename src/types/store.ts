import { ApiState } from './apiSlice';
import { YoutubeState } from './youtubeSlice';

export type StoreState = ApiState & YoutubeState;
