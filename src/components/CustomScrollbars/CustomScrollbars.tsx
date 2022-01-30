import { Scrollbars } from 'react-custom-scrollbars';
import { useCallback } from 'react';
import React from 'react';
import { CustomScrollbarsPropsType } from '../../types/scrollbars';

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
        overflow: 'hidden',
        minHeight: '70px',
        backgroundColor: '#27272a',
      }}
      onScroll={onScroll}
    >
      {children}
    </Scrollbars>
  );
};

const CustomScrollbarsVirtualList = React.forwardRef<
  unknown,
  CustomScrollbarsPropsType
>((props, ref) => <CustomScrollbars {...props} forwardedRef={ref} />);

export default CustomScrollbarsVirtualList;
