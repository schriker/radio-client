import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useSongsHistoryLazyQuery } from '../../generated/graphql';
import { useDebounce } from 'react-use';
import useStore from '../../store/store';

function PlaylistHistoryTitle() {
  const [value, setValue] = useState('');
  const [search] = useSongsHistoryLazyQuery();
  const setSearchValue = useStore((state) => state.setSearchValue);

  useDebounce(
    () => {
      if (value.length > 2) {
        search({
          variables: {
            songHistoryInput: {
              user: value,
            },
          },
        });
        setSearchValue(value);
      } else {
        search();
        setSearchValue(null);
      }
    },
    300,
    [value]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex items-center space-x-6">
      <div>Historia odtwarzania</div>
      <div className="flex-auto">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon className="h- w-5 text-zinc-600" />
          </span>
          <input
            value={value}
            onChange={handleChange}
            className="placeholder:italic placeholder:text-zinc-600 block bg-zinc-900 w-full border border-zinc-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-600 focus:ring-violet-600 focus:ring-1 sm:text-sm"
            placeholder="Użytkownik"
            type="text"
            name="search"
          />
        </label>
      </div>
    </div>
  );
}

export default PlaylistHistoryTitle;
