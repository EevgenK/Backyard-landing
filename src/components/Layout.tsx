import App from '../App';
import Header from './Header';
import Modal from './shared/shared/Modal';
import { useModal } from '../utils/hooks/useModal';
import ModalBody from './ModalBody';
import Footer from './Footer';

const Layout = () => {
  const { isOpen } = useModal();
  return (
    <>
      <Header />
      <main>
        <App />
      </main>
      <Footer />
      {isOpen && (
        <Modal>
          <ModalBody />
        </Modal>
      )}
    </>
  );
};

export default Layout;
