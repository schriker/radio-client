import ReactSlider from 'react-slider';
import VolumeIcon from '../Icons/VolumeIcon';
import useStore from '../../store/store';

export function Volume() {
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);

  const handleChange = (value: number) => {
    setVolume(value / 100);
  };

  return (
    <div className="flex items-center space-x-3">
      <div>
        <VolumeIcon />
      </div>
      <div>
        <div className="w-24 h-2">
          <ReactSlider
            value={volume * 100}
            onChange={handleChange}
            renderThumb={(props, state) => (
              <div
                {...props}
                className="w-4 h-4 -mt-1 flex items-center justify-center bg-white rounded-full shadow hover:cursor-pointer focus:outline-none focus:ring-violet-600 focus:ring-2"
              >
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              </div>
            )}
            trackClassName="bg-zinc-700 rounded-full h-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Volume;
