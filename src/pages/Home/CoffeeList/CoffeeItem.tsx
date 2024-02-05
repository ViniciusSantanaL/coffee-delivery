import { Button } from '@/components/Button'
import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '@/components/QuantityInput'
import { useImageUrl } from '@/hooks/useImageUrl'

import coffeeData from '@/data/coffees.json'

type CoffeeItemProps = (typeof coffeeData.coffees)[0]

export function CoffeeItem(props: CoffeeItemProps) {
  const img = useImageUrl(props.img)
  return (
    <li className="flex flex-col items-center w-64 px-5 pb-5 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
      <img
        className="max-w-[120px] -mt-5 self-center"
        src={img}
        alt="imagem de uma xícara de café"
      />
      <div className="flex gap-1">
        {props.tags.map((item) => (
          <span
            key={props.id}
            className="tag bg-yellow-light text-yellow-dark rounded-full px-2 py-1 mt-3"
          >
            {item}
          </span>
        ))}
      </div>

      <h3 className="block title-s text-base-subtitle mt-4">{props.name}</h3>
      <p className="block custom-text-s mt-2 text-base-label text-center">
        {props.description}
      </p>

      <div className="w-full mt-8 flex justify-between items-center text-base-text">
        <div className="flex gap-1 items-baseline text-center">
          <span className="custom-text-s">R$</span>
          <span className="title-m">
            {props.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="flex gap-2">
          <QuantityInput
            quantity={1}
            handleDecrementQuantity={() => null}
            handleIncrementQuantity={() => null}
          />
          <Button variant="icon" icon={ShoppingCart} />
        </div>
      </div>
    </li>
  )
}
