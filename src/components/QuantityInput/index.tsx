import { Minus, Plus } from '@phosphor-icons/react'

type QuantityInputProps = {
  quantity: number
  handleIncrementQuantity: () => void
  handleDecrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: QuantityInputProps) {
  return (
    <div className="flex items-center justify-center px-2 py-1 gap-3 bg-base-button rounded-md">
      <button className="group" onClick={handleDecrementQuantity}>
        <Minus className="fill-purple group-hover:fill-purple-dark" size={14} />
      </button>
      <span className="text-base-title custom-text-s pt-0.5">{quantity}</span>
      <button className="group" onClick={handleIncrementQuantity}>
        <Plus className="fill-purple group-hover:fill-purple-dark" size={14} />
      </button>
    </div>
  )
}
