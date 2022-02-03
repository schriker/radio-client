import { Transition } from '@headlessui/react';
import { InformationCircleIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useState } from 'react';
import { NotificationsItemPropsType } from '../../types/notifications';

function NotificationsItem({
  notifification,
  onClose,
  id,
}: NotificationsItemPropsType) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
    return () => onClose(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="px-10 md:px-0 relative">
        <div className="bg-zinc-600 mb-2 rounded-lg text-zinc-100 py-4 px-4 shadow-xl flex items-center w-full md:max-w-sm text-sm">
          <div className="absolute top-0 left-0 pt-4 pr-2 flex md:-ml-10 md:pr-4">
            <button
              type="button"
              className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => onClose(id)}
            >
              <span className="sr-only">Close panel</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <InformationCircleIcon className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
          {notifification}
        </div>
      </div>
    </Transition>
  );
}

export default NotificationsItem;
