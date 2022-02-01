import React from 'react';

export type SidebarPropsType = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};
