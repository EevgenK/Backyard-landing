import { FC } from 'react';
import { motion } from 'framer-motion';

const DropAnimation: FC = () => {
  return (
    <div className="anim-container">
      <img
        src="/img/partials/ground.webp"
        alt="Ground"
        className="anim-basic_img"
      />

      <motion.img
        src="/img/partials/drop.webp"
        alt="Drop"
        className="absolute md:top-40 lg:top-30 md:w-12 md:h-12 w-10 h-10 bg-transparent"
        initial={{ y: -100, opacity: 1 }}
        animate={{
          y: [-100, -20, 30],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.97, 1],

          repeat: Infinity,
          repeatDelay: 1,
          repeatType: 'loop',
        }}
      />
    </div>
  );
};

export default DropAnimation;
