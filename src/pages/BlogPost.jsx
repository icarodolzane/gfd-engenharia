import { Link } from 'react-router-dom';
import image from '../assets/image_blog.jpg';
import MobileHeader from '../components/MobileHeader';
// import Header from '../components/Header';
export default function BlogPost() {
  return (
    <>
      {/* <Header /> */}
      <MobileHeader />
      <div className="mt-20 flex flex-col items-center md:flex-row p-10">
        <div className="md:w-1/2">
          <img src={image} alt="panel-solar" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-2xl font-bold mb-4">Energia Solar</h1>
          <h1 className="text-3xl font-bold mb-4">Deixe o Sol pagar sua conta de energia!</h1>
          <p className="mb-4 text-justify">
            Nossa empresa oferece soluções sustentáveis que não apenas preservam o meio ambiente, mas também ajudam a reduzir drasticamente seus gastos com energia elétrica. Com a energia solar, você aproveita o sol como fonte renovável e gratuita, eliminando ou diminuindo significativamente sua dependência da rede elétrica convencional.
            A instalação de um sistema de energia solar em sua residência ou empresa permite que você produza sua própria eletricidade, gerando economia a longo prazo. Além disso, ao produzir mais energia do que consome, é possível até mesmo contabilizar o excedente em crédito, abatendo o valor da suas faturas. Não perca tempo, faça parte dessa revolução sustentável e comece a economizar hoje mesmo com a energia solar! Entre em contato conosco e descubra como podemos ajudá-lo(a) a conquistar independência energética e reduzir sua conta de luz.
          </p>
          <Link target='_blank' to='https://azume.com.br/institucional/6491bbd2c997ba00145f61aa'>
            <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded w-full md:w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
              Faça uma simulação
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
