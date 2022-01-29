import { ModalPropsType } from '../../types/modal';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';

function HelpModal({ isOpen, setIsOpen }: ModalPropsType) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-10 text-center">
          <Transition.Child
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
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-zinc-800 shadow-xl rounded-xl">
              <Transition.Child
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
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-zinc-100"
              >
                Pomoc
              </Dialog.Title>
              <div className="mt-2 space-y-6">
                <p className="text-sm text-zinc-500">
                  Aby dodać utwór do listy wyślij wiadomość na kanale:{' '}
                  <a
                    className="text-violet-500 hover:underline"
                    href="https://poorchat.net/users/RadioPancernik"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    RadioPancernik
                  </a>{' '}
                  z linkiem do utworu w serwisie YouTube.
                </p>
                <p className="text-sm text-zinc-500">
                  Aby pominąć utwór wyślij wiadomość o treści{' '}
                  <span className="text-violet-500">!skip</span>. Utwór zostanie
                  pominięty jeśli odpowiednia liczba użytkowników zagłosuje.
                </p>
              </div>
              <div className="w-full h-56 mt-4 rounded-md overflow-hidden">
                <iframe
                  title="bot"
                  src="https://poorchat.net/users/RadioPancernik"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-500 border border-transparent rounded-md hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500"
                  onClick={closeModal}
                >
                  Rozumiem, dzięki!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default HelpModal;
