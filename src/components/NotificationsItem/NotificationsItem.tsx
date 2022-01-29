import { Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useState } from 'react';
import { NotificationsItemPropsType } from '../../types/notifications';

function NotificationsItem({ notifification }: NotificationsItemPropsType) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
  }, []);

  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="bg-zinc-600 mb-2 rounded-lg text-zinc-100 py-4 px-4 shadow-xl flex items-center max-w-sm text-sm">
        <InformationCircleIcon className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
        {notifification.text}
      </div>
    </Transition>
  );
}

export default NotificationsItem;
