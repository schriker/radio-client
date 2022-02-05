import Modal from '../Modal/Modal';
import { HelpModalPropsType } from '../../types/help';

function HelpModal({ isOpen, setIsOpen }: HelpModalPropsType) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal title="Pomoc" isOpen={isOpen} setIsOpen={closeModal}>
      <div className="mt-2 space-y-6 max-w-md">
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
    </Modal>
  );
}

export default HelpModal;
