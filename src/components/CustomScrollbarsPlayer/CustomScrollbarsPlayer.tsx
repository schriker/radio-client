import { Scrollbars } from 'react-custom-scrollbars';
import { useCallback } from 'react';
import React from 'react';
import { CustomScrollbarsPropsType } from '../../types/scrollbars';

const CustomScrollbarsPlayer = ({
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
    >
      <div className="sticky top-0 h-9 z-20 bg-zinc-900/90 backdrop-blur-sm text-zinc-300 text-xs flex items-center px-3">
        <div className="flex-auto">Tytuł</div>
        <div className="flex space-x-7">
          <div>Dodał</div>
          <div>Czas</div>
        </div>
      </div>
      {children}
    </Scrollbars>
  );
};

const CustomScrollbarsVirtualList = React.forwardRef<
  unknown,
  CustomScrollbarsPropsType
>((props, ref) => <CustomScrollbarsPlayer {...props} forwardedRef={ref} />);

export default CustomScrollbarsVirtualList;
