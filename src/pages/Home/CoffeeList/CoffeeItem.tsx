import { Button } from '@/components/Button'
import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '@/components/QuantityInput'
import { useImageUrl } from '@/hooks/useImageUrl'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Coffee } from '@/model/Coffee.type'

type CoffeeItemProps = {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const { addItem } = useCart()

  const img = useImageUrl(coffee.img)

  function handleAddToCart() {
    addItem({ ...coffee, quantity: coffeeQuantity })
  }

  function handleIncrementQuantity() {
    setCoffeeQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (coffeeQuantity > 1) setCoffeeQuantity((state) => state - 1)
  }

  return (
    <li className="flex flex-col items-center w-64 px-5 pb-5 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
      <img
        className="max-w-[120px] -mt-5 self-center"
        src={img}
        alt="imagem de uma xícara de café"
      />
      <div className="flex gap-1">
        {coffee.tags.map((item) => (
          <span
            key={item}
            className="tag bg-yellow-light text-yellow-dark rounded-full px-2 py-1 mt-3"
          >
            {item}
          </span>
        ))}
      </div>

      <h3 className="block title-s text-base-subtitle mt-4">{coffee.name}</h3>
      <p className="block custom-text-s mt-2 text-base-label text-center">
        {coffee.description}
      </p>

      <div className="w-full mt-8 flex justify-between items-center text-base-text">
        <div className="flex gap-1 items-baseline text-center">
          <span className="custom-text-s">R$</span>
          <span className="title-m">
            {coffee.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="flex gap-2">
          <QuantityInput
            quantity={coffeeQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
            handleIncrementQuantity={handleIncrementQuantity}
          />
          <Button
            variant="icon"
            icon={ShoppingCart}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </li>
  )
}
