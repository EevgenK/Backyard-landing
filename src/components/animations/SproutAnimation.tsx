import { FC } from 'react';
import { motion } from 'framer-motion';

const SproutAnimation: FC = () => {
  return (
    <div className="anim-container">
      <img
        src="img/partials/ground.webp"
        alt="Ground"
        className="anim-basic_img"
      />
      <motion.img
        src="img/partials/tree.webp"
        alt="Sprout"
        className="absolute bottom-8 w-40 md:w-60 md:bottom-10 lg:bottom-8 origin-bottom"
        animate={{
          y: [10, 0, 0, 4],
          scale: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </div>
  );
};

export default SproutAnimation;
