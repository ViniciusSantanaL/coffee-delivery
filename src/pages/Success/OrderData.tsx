import { useCart } from '@/contexts/CartContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function OrderData() {
  const { order } = useCart()
  return (
    <div className="border-rgb">
      <div className="flex flex-col gap-8 p-10 bg-white rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
        <div className="flex gap-3">
          <MapPin
            className="fill-background bg-purple p-2 rounded-full"
            size={32}
          />
          <div className="flex flex-col">
            <span>
              Entrega em{' '}
              <strong>
                {order?.address.street.includes('Rua')
                  ? order?.address.street
                  : 'Rua '.concat(order?.address.street as string)}
                , {order?.address.number}
              </strong>
            </span>
            <span>
              {order?.address.neighborhood} - {order?.address.city},{' '}
              {order?.address.state}
            </span>
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
            <strong>{order?.paymentType}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
