import { Button } from '@/components/Button'
import { CartItem } from './CartItem'

export function Cart() {
  return (
    <aside className="flex-grow">
      <h2 className="title-xs text-base-subtitle mb-4">Cafés selecionados</h2>
      <div className="flex flex-col  gap-6 p-10 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
        <CartItem />
        <div className="w-full h-[1px] bg-base-button"></div>
        <CartItem />
        <div className="w-full h-[1px] bg-base-button"></div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-base-text custom-text-s">Total de itens</span>
            <span className="text-base-text custom-text-m">
              {(29.7).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base-text custom-text-s">Entrega</span>
            <span className="text-base-text custom-text-m">
              {(3.5).toLocaleString('pt-BR', {
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
              {(33.2).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>

        <Button>CONFIRMAR PEDIDO</Button>
      </div>
    </aside>
  )
}
