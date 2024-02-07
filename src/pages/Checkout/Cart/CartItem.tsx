import { Button } from '@/components/Button'
import { QuantityInput } from '@/components/QuantityInput'
import { useCart } from '@/contexts/CartContext'
import { useImageUrl } from '@/hooks/useImageUrl'
import { CoffeeItem } from '@/model/CoffeeItem.type'
import { Trash } from '@phosphor-icons/react'

type CartItemProps = CoffeeItem

export function CartItem({ id, img, name, price, quantity }: CartItemProps) {
  const { removeItem, incrementItemQuantity, decrementItemQuantity } = useCart()

  function handleRemoveItem() {
    removeItem(id)
  }

  function handleIncrementItemQuantity() {
    incrementItemQuantity(id)
  }

  function handleDecrementItemQuantity() {
    decrementItemQuantity(id)
  }

  return (
    <div className="flex justify-between gap-5 px-1 py-2">
      <div className="flex gap-5">
        <img className="w-16" src={useImageUrl(img)} alt="" />
        <div className="flex flex-col gap-2">
          <span className="custom-text-m text-base-subtitle">{name}</span>
          <div className="flex gap-2">
            <QuantityInput
              quantity={quantity}
              handleDecrementQuantity={handleDecrementItemQuantity}
              handleIncrementQuantity={handleIncrementItemQuantity}
            />
            <Button variant="secondary" onClick={handleRemoveItem}>
              <Trash className="fill-purple" /> REMOVER
            </Button>
          </div>
        </div>
      </div>

      <span className="block custom-text-m font-bold text-base-text">
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </div>
  )
}
