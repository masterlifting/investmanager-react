/** @format */

import React from 'react';
import { Board } from '../components/Board';
import { Companies } from '../components/company/Companies';
import { Footer } from '../components/Footer';

export const Index: React.FC = () => {
  return (
    <div>
      <Board />
      <Companies />
      <Footer />
    </div>
  );
};
