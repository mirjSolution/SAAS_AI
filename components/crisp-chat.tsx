'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('b5fd761a-6ad5-4719-906b-fc10d8b40bdc');
  }, []);

  return null;
};
