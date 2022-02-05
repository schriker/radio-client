import { Transition, Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, useRef } from 'react';
import { ModalPropsType } from '../../types/modal';

function Modal({
  isOpen,
  setIsOpen,
  children,
  title,
  unmount = true,
  isVideo = false,
}: ModalPropsType) {
  let completeButtonRef = useRef(null);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition show={isOpen} as={Fragment} unmount={unmount}>
      <Dialog
        unmount={unmount}
        as="div"
        initialFocus={completeButtonRef}
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-10 text-center">
          <Transition.Child
            unmount={unmount}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            unmount={unmount}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`${
                isVideo
                  ? 'aspect-video w-full md:w-4/5'
                  : 'max-w-full sm:max-w-4/5'
              } relative inline-block p-6 my-8 text-left align-middle transition-all transform bg-zinc-800 shadow-xl rounded-xl`}
            >
              <Transition.Child
                unmount={unmount}
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button
                    ref={completeButtonRef}
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              {title && (
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-zinc-100"
                >
                  {title}
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
