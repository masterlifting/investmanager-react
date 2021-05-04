/** @format */

import { NavLink } from 'react-router-dom';
import { AuthDisplay } from '../../components/authentication/AuthDisplay';

function NavBar() {
  return (
    <nav className='navbar bg-dark navbar-dark navbar-expand-md py-0' style={{ height: '5vh' }}>
      <div className='container-fluid'>
        <NavLink className='navbar-brand py-0 text-muted' style={{ fontSize: '1rem' }} to='/'>
          go to Blazor
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ fontSize: '.75rem' }}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
          <div className='navbar-nav rounded' style={{ backgroundColor: '#1C1C1C' }}>
            <NavLink className='nav-link active' aria-current='page' to='/'>
              Главная
            </NavLink>
            <NavLink className='nav-link' to='/accounts'>
              Инфо по счетам
            </NavLink>
            <NavLink className='nav-link' to='/admin'>
              Админ панель
            </NavLink>
            <AuthDisplay />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
