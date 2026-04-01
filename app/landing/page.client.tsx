'use client';

import React from 'react';
import { useEffect } from 'react';

const LandingPageClient = () => {
  useEffect(() => {
    console.log('LandingPageClient rendered');
  }, []);

  return <div>Client-side only content</div>;
};

export default LandingPageClient;