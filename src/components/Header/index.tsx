import logo from '@/assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="py-8">
      <nav className="max-w-app flex items-center justify-between mx-auto">
        <img src={logo} alt="Logo" />

        <aside className="flex gap-3">
          <div className="flex gap-1 items-center justify-center p-2 bg-purple-light rounded-md">
            <MapPin size={22} weight="fill" className="fill-purple" />
            <span className="custom-text-s text-purple-dark">
              Porto Alegre, RS
            </span>
          </div>
          <button className="p-2 bg-yellow-light rounded-md relative">
            <ShoppingCart
              size={22}
              className="fill-yellow-dark"
              weight="fill"
            />
            <span className="absolute -top-2 -right-2 rounded-full bg-yellow-dark p-1 text-white w-5 h-5 flex items-center justify-center font-bold text-xs">
              3
            </span>
          </button>
        </aside>
      </nav>
    </header>
  )
}
