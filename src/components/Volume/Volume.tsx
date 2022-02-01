import VolumeIcon from '../Icons/VolumeIcon';
import useStore from '../../store/store';
import { getTrackBackground, Range } from 'react-range';
import MuteIcon from '../Icons/MuteIcon';

export function Volume() {
  const volume = useStore((state) => state.volume);
  const muted = useStore((state) => state.muted);
  const setMuted = useStore((state) => state.setMuted);
  const setVolume = useStore((state) => state.setVolume);

  const handleChange = (values: number[]) => {
    setMuted(false);
    setVolume(values[0] / 100);
  };

  const mute = () => {
    setMuted(!muted);
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex w-6 mr-1">
        <button onClick={mute}>
          {muted || volume === 0 ? <MuteIcon /> : <VolumeIcon />}
        </button>
      </div>
      <div className="w-24 mr-1">
        <div className="h-2">
          <Range
            step={1}
            min={0}
            max={100}
            values={muted ? [0] : [volume * 100]}
            onChange={handleChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  width: '100%',
                  background: getTrackBackground({
                    values: muted ? [0] : [volume * 100],
                    colors: [
                      'rgb(147 51 234 / var(--tw-bg-opacity))',
                      'rgb(63 63 70 / var(--tw-bg-opacity))',
                    ],
                    min: 0,
                    max: 100,
                  }),
                }}
                className="rounded-full h-2"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                }}
                className="w-4 h-4 flex items-center justify-center bg-white rounded-full shadow hover:cursor-pointer focus:outline-none focus:ring-violet-600 focus:ring-2"
              >
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Volume;
