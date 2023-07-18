import Icon, { AvailableIcons } from '@/components/utils/icons';
import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

interface AppNavigationElementProps extends LinkProps {
  name: string;
  href: string;
  icon: AvailableIcons;
}

const AppNavigationElement = forwardRef<HTMLAnchorElement, AppNavigationElementProps>(
  ({ name, href, icon, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className="flex flex-col items-center justify-center gap-y-1"
        {...props}
      >
        <li className="p-4 rounded-full 0 flex flex-col justify-center items-center gap-y-1">
          <Icon name={icon} />

          <span className="capitalize font-medium hidden">{name}</span>
        </li>
      </Link>
    );
  }
);

AppNavigationElement.displayName = 'AppNavigationElement';

export default AppNavigationElement;
