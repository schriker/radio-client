import { Scrollbars } from 'react-custom-scrollbars';
import { useCallback } from 'react';
import React from 'react';
import { CustomScrollbarsPropsType } from '../../types/scrollbars';
import { HeartIcon } from '@heroicons/react/outline';

const CustomScrollbars = ({
  onScroll,
  forwardedRef,
  style,
  children,
}: CustomScrollbarsPropsType) => {
  const refSetter = useCallback((scrollbarsRef) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view);
    } else {
      forwardedRef(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Scrollbars
      ref={refSetter}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70px',
        backgroundColor: '#27272a',
      }}
      onScroll={onScroll}
      renderThumbVertical={({ style, props }) => (
        <div style={{ ...style }} {...props} className="z-50" />
      )}
      renderTrackHorizontal={({ style, props }) => (
        <div style={{ ...style }} {...props} className="z-50" />
      )}
    >
      <div className="sticky top-0 h-9 z-10 font-semibold bg-zinc-900/90 backdrop-blur-sm text-zinc-300 text-xs flex items-center px-3">
        <div className="flex-auto uppercase">Tytuł</div>
        <div className="flex space-x-3 items-center text-zinc-400 pr-2 uppercase">
          <p>Dodał</p>
          <p>&middot;</p>
          <p className="w-8">Czas</p>
          <p>&middot;</p>
          <p>
            <HeartIcon className="w-4" />
          </p>
        </div>
      </div>
      {children}
    </Scrollbars>
  );
};

const CustomScrollbarsVirtualList = React.forwardRef<
  unknown,
  CustomScrollbarsPropsType
>((props, ref) => <CustomScrollbars {...props} forwardedRef={ref} />);

export default CustomScrollbarsVirtualList;
