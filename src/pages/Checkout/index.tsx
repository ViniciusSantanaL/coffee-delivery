import { Cart } from './Cart'
import { Form } from './Form'

export function Checkout() {
  return (
    <main className="flex mx-auto max-w-app justify-between gap-8 mt-8">
      <div className="w-full max-w-[640px]">
        <h2 className="title-xs text-base-subtitle mb-4">
          Complete seu pedido
        </h2>
        <Form />
      </div>
      <Cart />
    </main>
  )
}
