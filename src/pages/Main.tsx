/** @format */

import React from 'react';
import { Board } from '../components/Board';
import { Companies } from '../components/company/Companies';
import { Footer } from '../components/company/Footer';

export const Main: React.FC = () => {
  return (
    <div style={{ height: '95vh' }}>
      <Board />
      <Companies />
      <Footer />
    </div>
  );
};
