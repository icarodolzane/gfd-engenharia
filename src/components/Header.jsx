import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className='
    flex flex-row justify-around items-center'>
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
      <Link to='/contact'>
        <button className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
          Contato
        </button>
      </Link>
    </header>
  )
}
