import { Button } from '@/components/Button'
import { CartItem } from './CartItem'
import { useCart } from '@/contexts/CartContext'
import { Fragment } from 'react'
import { NoItems } from './NoItems'

type CartProps = {
  formId: string
}

export function Cart({ formId }: CartProps) {
  const { cart } = useCart()
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const deliveryFee = 3.5

  if (cart.length === 0) {
    return <NoItems />
  }
  return (
    <aside className="flex-grow">
      <h2 className="title-xs text-base-subtitle mb-4">Cafés selecionados</h2>
      <div className="flex flex-col  gap-6 p-10 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
        {cart.map((item, number) => (
          <Fragment key={`${item.id}-${number}`}>
            <CartItem {...item} id={item.id} />
            <div className="w-full h-[1px] bg-base-button"></div>
          </Fragment>
        ))}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-base-text custom-text-s">Total de itens</span>
            <span className="text-base-text custom-text-m">
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-text custom-text-s">Entrega</span>
            <span className="text-base-text custom-text-m">
              {deliveryFee.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-subtitle custom-text-l font-bold">
              Total
            </span>
            <span className="text-base-subtitle custom-text-l font-bold">
              {(totalPrice + deliveryFee).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>

        <Button type="submit" form={formId}>
          CONFIRMAR PEDIDO
        </Button>
      </div>
    </aside>
  )
}
