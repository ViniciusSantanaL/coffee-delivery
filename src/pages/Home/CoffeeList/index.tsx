import { CoffeeItem } from './CoffeeItem'

import data from '@/data/coffees.json'

export function CoffeeList() {
  const coffees = data.coffees
  return (
    <section className="max-w-app mx-auto mt-5 pt-8 pb-36">
      <h2 className="title-l text-base-subtitle">Nossos Cafés</h2>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-10 mt-14">
        {coffees.map((item) => (
          <CoffeeItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  )
}
