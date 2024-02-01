import { CreditCard } from '@phosphor-icons/react'

export function Select() {
  return (
    <div className="flex flex-col gap-10 mt-8">
      <button className="flex p-4 bg-base-button gap-3 items-center text-base-text rounded-md">
        <CreditCard className="fill-purple" /> Cartão de crédito
      </button>
      {/* <button className="bg-base-button">
        <CreditCard /> Cartão de débito
      </button>
      <button className="bg-base-button">
        <CreditCard /> Pix
      </button> */}
    </div>
  )
}
