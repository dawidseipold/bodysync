import { LayoutGrid, Home, Dumbbell, User, Gauge, CalendarDays, BarChartBig } from 'lucide-react';

export type AvailableIcons = keyof typeof Icons;

export interface IconProps {
  name: AvailableIcons;
}

export const Icons = {
  Home: Home,
  Gauge: Gauge,
  CalendarDays: CalendarDays,
  LayoutGrid: LayoutGrid,
  BarChartBig: BarChartBig,
  Dumbbell: Dumbbell,
  User: User,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const LucideIcon = Icons[name];

  return <LucideIcon>Icon</LucideIcon>;
};

export default Icon;
