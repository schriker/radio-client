import React from 'react';

export type SidebarPropsType = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};
