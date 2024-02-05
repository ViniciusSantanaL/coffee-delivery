import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Tags() {
  return (
    <div className="grid grid-cols-2 gap-y-5">
      <div className="flex gap-3 items-center">
        <ShoppingCart
          size={32}
          className="bg-yellow-dark fill-background rounded-full p-2"
          weight="fill"
        />
        <span className="text-base-text">Compra simples e segura</span>
      </div>
      <div className="flex gap-3 items-center">
        <Package
          size={32}
          className="bg-base-text fill-background rounded-full p-2"
          weight="fill"
        />
        <span className="text-base-text">Entrega rápida e rastreada</span>
      </div>
      <div className="flex gap-3 items-center">
        <Timer
          size={32}
          className="bg-yellow fill-background rounded-full p-2"
          weight="fill"
        />
        <span className="text-base-text">Compra simples e segura</span>
      </div>
      <div className="flex gap-3 items-center">
        <Coffee
          size={32}
          className="bg-purple fill-background rounded-full p-2"
          weight="fill"
        />
        <span className="text-base-text">Compra simples e segura</span>
      </div>
    </div>
  )
}
