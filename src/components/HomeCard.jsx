'use client';

import { Card } from 'flowbite-react';
import solar from '../assets/solar1.png';
export default function HomeCard() {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={solar}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Saiba porque a energia solar pode ser a solução...
        </p>
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Custo benefício (durabilidade e retorno), sustentabilidade, valorização imobiliária e financiamento...
        </p>
      </div>
    </Card>
  )
}