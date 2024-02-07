import { ShoppingCart, SmileySad } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function NoItems() {
  return (
    <aside className="flex-grow">
      <h2 className="title-xs text-base-subtitle mb-4">Cafés selecionados</h2>
      <div className="flex flex-col items-center gap-6 p-10 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
        <div className="flex flex-col items-center gap-4">
          <SmileySad size={44} />
          <span className="title-s text-base-subtitle">
            Não há produtos no carrinho
          </span>
        </div>
        <Link
          className="flex gap-1.5 items-center text-xs font-normal py-2 px-3 text-white bg-purple rounded-md hover:bg-purple-dark hover:text-base-card transition-colors"
          to="/#produtos"
        >
          ACESSAR CATALÓGO
          <ShoppingCart size={17} className="mb-1" weight="fill" />
        </Link>
      </div>
    </aside>
  )
}
