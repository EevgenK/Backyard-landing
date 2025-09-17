export interface LogoImgProps {
  additionalClass?: string;
}
const LogoImg = ({ additionalClass }: LogoImgProps) => {
  return (
    <img
      src="/log.webp"
      alt="Backyard logo"
      width="25"
      height="26"
      className={additionalClass}
    />
  );
};

export default LogoImg;
