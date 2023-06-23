import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className='
    flex flex-row justify-around items-center sticky top-0'>
      <img className='w-48' src={logo} alt="gfd-logo" />
      <Link to='/'>
        <button className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
          Início
        </button>
      </Link>
      <Link to='/services'>
        <button className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
          Nossos serviços
        </button>
      </Link>
      <Link target='_blank' to='https://azume.com.br/institucional/6491bbd2c997ba00145f61aa'>
        <button className="bg-orange-600	text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
          Faça uma simulação
        </button>
      </Link>
      <Link to='/contact'>
        <button className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
          Contato
        </button>
      </Link>
    </header>
  )
}
