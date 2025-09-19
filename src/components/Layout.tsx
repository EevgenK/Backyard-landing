import App from '../App';
import Header from './Header';
import Modal from './shared/shared/Modal';
import { useModal } from '../utils/hooks/useModal';
import ModalBody from './ModalBody';

const Layout = () => {
  const { isOpen } = useModal();
  return (
    <>
      <Header />
      <main>
        <App />
      </main>
      {isOpen && (
        <Modal>
          <ModalBody />
        </Modal>
      )}
    </>
  );
};

export default Layout;
