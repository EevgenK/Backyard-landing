// export interface LogoImgProps {
//   additionalClass?: string;
// }
// const LogoImg = ({ additionalClass }: LogoImgProps) => {
//   return (
//     <div className={additionalClass}>
//       <img
//         src="img/logo-unscreen.gif"
//         alt="Backyard logo"
//         className="w-full h-full object-contain"
//       />
//     </div>
//   );
// };

// export default LogoImg;

export interface LogoImgProps {
  additionalClass?: string;
  shadow?: boolean;
}
import { FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const LogoImg: FC<LogoImgProps> = ({ shadow, additionalClass }) => {
  return (
    <div className={clsx('relative', additionalClass)}>
      {shadow && (
        <motion.div
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-20 h-6 bg-black/30 rounded-full blur-md"
          animate={{ scale: [1, 0.8, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <motion.img
        src="img/logo-i.webp"
        alt="Leaf"
        className="w-full h-full object-contain relative z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default LogoImg;
