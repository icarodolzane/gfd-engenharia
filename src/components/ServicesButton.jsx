import { useState } from "react";

const handleClick = () => {
  if(clickTrue){
    setClickTrue(false)
  }
  else{
    setClickTrue(true)
  }
} 
export default function Services() {
  const [clickTrue, setClickTrue] = useState(false);
  return (
    <>
      <button onClick={handleClick} className="bg-stone-900 text-white font-bold py-2 px-4 rounded w-60 self-center active:bg-stone-400 hover:bg-zinc-500">
        Serviços
      </button>
      <ul className="hidden">
        <li>Energia Solar - Micro e Minigeração</li>
        <li>Projeto subestação Aérea </li>
        <li>Projeto subestação Abrigada</li>
        <li>Projeto SPDA</li>
        <li>Laudo SPDA </li>
        <li>Consultoria em elétrica Residencial e Predial</li>
    </ul>
    </>
  )
}
