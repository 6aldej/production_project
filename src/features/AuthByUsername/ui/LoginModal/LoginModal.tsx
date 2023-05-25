import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  className,
  isOpen,
  onClose,
} : LoginModalProps) => (
  <Modal
    lazy
    isOpen={isOpen}
    onClose={onClose}
    className={classNames('', {}, [className])}
  >
    <Suspense fallback={<Loader />}>
      <LoginForm />
    </Suspense>
  </Modal>
);
