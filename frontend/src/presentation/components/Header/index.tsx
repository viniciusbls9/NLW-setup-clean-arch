import logoImage from '@assets/logo.svg';
import { Modal } from '@components/Modal';

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo Habit" />

      <Modal />
    </div>
  );
};
