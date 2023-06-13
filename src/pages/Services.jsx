import Header from "../components/Header";

const paragraph = 'font-sans text-2xl leading-10';
export default function Services() {
  return (
    <>
    <Header />
    <div className="text-center mt-40">
      <h1 className="font-sans text-5xl font-bold mb-10">Nossos serviços</h1>
      <p className={paragraph}>Energia Solar - Micro e Minigeração</p>
      <p className={paragraph}>Projeto subestação Aérea </p>
      <p className={paragraph}>Projeto subestação Abrigada</p>
      <p className={paragraph}>Projeto SPDA</p>
      <p className={paragraph}>Laudo SPDA</p>
      <p className={paragraph}>Consultoria em elétrica Residencial e Predial</p>
    </div>
    </>
  )
}
