import { useEffect, useRef, useCallback } from 'react';
import { useModal } from '../../../utils/hooks/useModal';
import BurgerBtn from '../../BurgerBtn';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    },
    [closeModal, modalRef],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal, handleClickOutside, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <BurgerBtn
        icon="icon-close"
        action={closeModal}
        additionalClass="fixed top-5 inset-x-0 mx-auto translate-x-[160px] z-50 "
      />
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg p-6 w-56 max-w-md fixed top-20 inset-x-0 mx-auto translate-x-[60px] z-40"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
