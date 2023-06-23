import { Link } from 'react-router-dom';
import image from '../assets/image_blog.jpg';
import Header from '../components/Header';
export default function BlogPost() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-around  bg-slate-200 p-10 gap-10">
        <div className=" border border-sky-500 w-4/6 h-4/6 rounded-lg">
          <img src={image} alt="panel-solar" className='w-full h-full'/>
        </div>
        <div className="flex flex-col gap-5 items-center bg-slate-200 h-full w-full">
          <h1 className="font-sans text-4xl font-bold mt-20">Energia Solar</h1>
          <h1 className="font-sans text-5xl font-bold text-center text-orange-600">Deixe o Sol pagar sua conta de energia!</h1>
          <p className="font-mono text-sm text-justify">
          Nossa empresa oferece soluções sustentáveis que não apenas preservam o meio ambiente, mas também ajudam a reduzir drasticamente seus gastos com energia elétrica. Com a energia solar, você aproveita o sol como fonte renovável e gratuita, eliminando ou diminuindo significativamente sua dependência da rede elétrica convencional.
          A instalação de um sistema de energia solar em sua residência ou empresa permite que você produza sua própria eletricidade, gerando economia a longo prazo. Além disso, ao produzir mais energia do que consome, é possível até mesmo contabilizar o excedente em crédito, abatendo o valor da suas faturas. Não perca tempo, faça parte dessa revolução sustentável e comece a economizar hoje mesmo com a energia solar! Entre em contato conosco e descubra como podemos ajudá-lo(a) a conquistar independência energética e reduzir sua conta de luz.
        </p>
        <Link target='_blank' to='https://azume.com.br/institucional/6491bbd2c997ba00145f61aa'>
          <button className="bg-orange-600	text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
            Faça uma simulação
          </button>
        </Link>
        </div>
      </div>
    </>
  )
}
