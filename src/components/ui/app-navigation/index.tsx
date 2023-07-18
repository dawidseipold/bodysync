'use client';

import { AvailableIcons } from '../../utils/icons';
import { motion } from 'framer-motion';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import AppNavigationElement from './element';

interface IPages {
  name: string;
  href: string;
  icon: AvailableIcons;
  current: boolean;
  sub?: Omit<IPages, 'current'>[];
}

const AppNavigation = () => {
  const segment = useSelectedLayoutSegment();
  const [indicatorXPosition, setIndicatorXPosition] = useState<number | null>(null);
  const [pages, setPages] = useState<IPages[]>([
    {
      name: 'home',
      href: '/',
      icon: 'Home',
      current: false,
    },
    {
      name: 'workout',
      href: '/workout',
      icon: 'Gauge',
      current: false,
      sub: [
        {
          name: 'calendar',
          href: '/calendar',
          icon: 'CalendarDays',
        },
      ],
    },
    {
      name: 'analytics',
      href: '/analytics',
      icon: 'BarChartBig',
      current: false,
    },
    {
      name: 'profile',
      href: '/profile',
      icon: 'User',
      current: false,
    },
  ]);

  const indicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (indicatorRef.current) {
      setIndicatorXPosition(indicatorRef?.current?.offsetLeft + 12);
    }
  }, [pages]);

  useEffect(() => {
    const updatedPages = pages.map((page) => ({
      ...page,
      current: segment ? segment === page.name : page.href === '/',
    }));

    setPages(updatedPages);
  }, [segment]);

  return (
    <ul className="fixed bottom-4 left-4 w-[calc(100%-2rem)] flex justify-between px-4 py-2 bg-dark-primary rounded-3xl group overflow-hidden">
      {pages.map((page) => (
        <AppNavigationElement
          key={page.name}
          ref={page.current ? indicatorRef : null}
          name={page.name}
          href={page.href}
          icon={page.icon}
        />
      ))}

      {indicatorXPosition && (
        <motion.div
          initial={{ y: '100%', x: indicatorXPosition || 0 }}
          animate={{ y: 0, x: indicatorXPosition || 0 }}
          transition={{ staggerChildren: 1 }}
          className="absolute left-0 bottom-0 w-8 h-2 bg-white rounded-t-full"
        />
      )}
    </ul>
  );
};

export default AppNavigation;
