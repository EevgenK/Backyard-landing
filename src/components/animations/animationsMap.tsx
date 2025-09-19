import DropAnimation from './DropAnimation';
import SproutAnimation from './SproutAnimation';
import CoinGrowAnimation from './CoinGrowAnimation';

const animationsMap: Record<string, React.FC> = {
  drop: DropAnimation,
  sprout: SproutAnimation,
  coins: CoinGrowAnimation,
};
export default animationsMap;
