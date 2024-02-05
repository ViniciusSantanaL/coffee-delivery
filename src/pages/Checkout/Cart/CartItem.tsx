import { Button } from '@/components/Button'
import { QuantityInput } from '@/components/QuantityInput'
import { Trash } from '@phosphor-icons/react'

export function CartItem() {
  return (
    <div className="flex justify-between gap-5 px-1 py-2">
      <div className="flex gap-5">
        <img
          className="w-16"
          src="/src/assets/coffees/cafe-expresso.svg"
          alt=""
        />
        <div className="flex flex-col gap-2">
          <span className="custom-text-m text-base-subtitle">
            Expresso Tradicional
          </span>
          <div className="flex gap-2">
            <QuantityInput
              quantity={1}
              handleDecrementQuantity={() => console.log('oi')}
              handleIncrementQuantity={() => console.log('oi 2')}
            />
            <Button variant="secondary">
              <Trash className="fill-purple" /> REMOVER
            </Button>
          </div>
        </div>
      </div>

      <span className="block custom-text-m font-bold text-base-text">
        {(9.9).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </div>
  )
}
