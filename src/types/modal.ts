import React from 'react';

export type ModalPropsType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  unmount?: boolean;
  isVideo?: boolean;
};
