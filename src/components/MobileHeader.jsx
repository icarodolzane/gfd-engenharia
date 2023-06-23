import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';

const azume = 'https://azume.com.br/institucional/6491bbd2c997ba00145f61aa';
export default function MobileHeader() {
  return (
    <Popover className='container mx auto flex items-center border-b-2 px-6 py-2 h-24 gap-20 fixed top-0 bg-gray-300'>
      <img className='w-40' src={logo} alt="gfd-logo" />
      <div className='hidden sm:flex itens-center justify-center gap 2 md:gap-8'>
        <Link className='text-2xl hover:font-bold' to="/">Início</Link>
        <Link className='text-2xl hover:font-bold'to="/services">Nossos serviços</Link>
        <Link className='text-2xl hover:font-bold'target='_blank' to={azume}>Faça uma simulação</Link>
        <Link className='text-2xl hover:font-bold'to="/contact">Contato</Link>
      </div>
      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button
          className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus: ring-inset focus:ring-indigo-500'
        >
          <span className='sr-only'>Abrir menu</span>
          <Bars3Icon className='h-7 w-7' aria-hidden='true' />
        </Popover.Button>
      </div>
      <Popover.Panel
        focus
        className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
      >
        <div className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
          <div className='px-5 pt-5 pb-6 flex flex-col justify-center items-center'>
            <img className='w-28' src={logo} alt="gfd-logo" />
            <div className='mr-2'>
              <Popover.Button
                className='inline-flex items-center justify-center rounded-md bg-white p2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Fechar</span>
                <XMarkIcon className='h-8 w-8' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>
          <div>
            <nav className='flex flex-col gap-10 items-center p-10'>
            <Link className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-full h-10 text-center pt-1' to="/">Início</Link>
            <Link className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-full h-10 text-center pt-1' to="/services">Nossos serviços</Link>
            <Link className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-full h-10 text-center pt-1' target='_blank' to={azume}>Faça uma simulação</Link>
            <Link className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-full h-10 text-center pt-1' to="/contact">Contato</Link>
            </nav>
          </div>
        </div>

      </Popover.Panel>
    </Popover>
  )
}