import { Tags } from './Tags'

import coffeeHome from '@/assets/coffe-home.svg'
import background from '@/assets/background.svg'
import { CoffeeList } from './CoffeeList'

export function Home() {
  return (
    <main className="px-4 relative">
      <section className="mx-auto max-w-app flex flex-col items-center justify-between gap-14 py-16 lg:flex-row lg:justify-center">
        <img
          className="absolute top-0 left-0 object-cover w-screen max-h-[544px] -z-10 opacity-55"
          src={background}
          alt=""
        />
        <aside className="flex flex-col gap-24">
          <div className="flex flex-col gap-4">
            <h1 className="title-xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <span className="text-base-subtitle custom-text-l">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <Tags />
        </aside>
        <img src={coffeeHome} alt="Imagem de café com grãos" />
      </section>
      <CoffeeList />
    </main>
  )
}
