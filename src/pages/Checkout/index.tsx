import { Cart } from './Cart'
import { CheckoutForm } from './Form/CheckoutForm'

export function Checkout() {
  const formId = 'checkout-form'
  return (
    <main className="flex flex-col mx-auto max-w-app items-center justify-between gap-8 mt-8 xl:flex-row xl:items-stretch">
      <div className="w-full max-w-[640px]">
        <h2 className="title-xs text-base-subtitle mb-4">
          Complete seu pedido
        </h2>
        <CheckoutForm formId={formId} />
      </div>
      <Cart formId={formId} />
    </main>
  )
}
