import CustomButton from './shared/shared/CustomButton';
import NavList from './shared/shared/NavList';

const ModalBody = () => {
  return (
    <div className="w-44">
      <NavList type="menu" />
      <CustomButton color="dark" additionalClass="w-full  py-3 ">
        Connect
      </CustomButton>
    </div>
  );
};

export default ModalBody;
