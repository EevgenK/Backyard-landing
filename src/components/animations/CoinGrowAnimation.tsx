import { FC } from 'react';
import { motion } from 'framer-motion';

const CoinGrowAnimation: FC = () => {
  return (
    <div className="anim-container">
      <img
        src="/img/partials/tree_ground.webp"
        alt="Tree with Ground"
        className="anim-basic_img"
      />

      <motion.img
        src="/img/partials/coins.webp"
        alt="Coins"
        className="absolute w-20 md:w-22 bottom-18 md:bottom-26 lg:bottom-18"
        initial={{ scale: 0, opacity: 0, y: 10 }}
        animate={{
          scale: [0, 1, 1],
          opacity: [0, 1, 1],
          y: [10, 0, -10],
        }}
        transition={{
          duration: 2,
          ease: 'easeOut',
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: 'loop',
        }}
      />
    </div>
  );
};

export default CoinGrowAnimation;
