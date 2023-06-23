import HomeCard from '../components/HomeCard'
import Title from '../components/Title'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center gap-10'>
        <Title/>
        <div className='flex flex-col items-center gap-10 w-6/12 h-6/12'>
          <HomeCard />
          <Link to='/info'>
            <button className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
              Saiba mais ...
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
