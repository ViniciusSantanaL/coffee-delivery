import { OrderData } from './OrderData'

import successOrder from '@/assets/success-order.svg'

export function Success() {
  return (
    <main className="flex flex-col items-center mx-auto max-w-app gap-10 mt-20 lg:flex-row lg:items-end lg:justify-between ">
      <aside className="max-w-[524px] w-full flex flex-col gap-10">
        <div>
          <h2 className="text-yellow-dark title-l">Uhu! Pedido confirmado</h2>
          <span className="text-base-subtitle custom-text-l">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>
        <OrderData />
      </aside>
      <img className="-mb-3" src={successOrder} alt="" />
    </main>
  )
}
