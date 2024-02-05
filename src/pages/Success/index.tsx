import successOrder from '@/assets/success-order.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
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

        <div className="border-rgb">
          <div className="flex flex-col gap-8 p-10 bg-white rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
            <div className="flex gap-3">
              <MapPin
                className="fill-background bg-purple p-2 rounded-full"
                size={32}
              />
              <div className="flex flex-col">
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Timer
                className="fill-background bg-yellow p-2 rounded-full"
                size={32}
              />
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="flex gap-3">
              <CurrencyDollar
                className="fill-background bg-yellow-dark p-2 rounded-full"
                size={32}
              />
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <img className="-mb-3" src={successOrder} alt="" />
    </main>
  )
}
