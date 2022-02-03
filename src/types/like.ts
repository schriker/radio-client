import { SongFragmentFragment } from '../generated/graphql';

export type LikePropsType = {
  song: SongFragmentFragment;
  small?: boolean;
};
