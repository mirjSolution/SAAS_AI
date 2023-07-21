'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({ apiLimitCount }: MobileSidebarProps) => {
  // Remove hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        {/* <Button variant={'ghost'} size={'icon'} className='md:hidden'>
          <Menu />
        </Button> */}
        <Menu className='md:hidden' />
      </SheetTrigger>

      <SheetContent side={'left'} className='p-0'>
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
