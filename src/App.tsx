/** @format */

import { useDispatch } from 'react-redux';
import './App.css';
import { Companies } from './components/company/Companies';
import React from 'react';
import { getCompanies } from './components/company/company-thunks';

const App : React.FC = () => {

  const dispatch = useDispatch();
  return (
    <div className='App'>
      <button onClick={() => dispatch(getCompanies())}>get companies</button>
      <Companies />
    </div>
  );
}

export default App;
