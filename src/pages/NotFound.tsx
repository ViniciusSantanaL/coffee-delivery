import { Coffee, SmileyXEyes } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="title-xl">Oops!</h1>
      <div className="flex gap-2 items-center">
        <p className="custom-text-l text-base-text">
          Desculpe, mas acho que os cafés não ficam por aqui
        </p>
        <SmileyXEyes size={33} />
      </div>

      <Link
        to="/"
        className="flex items-center text-gray-500 gap-1 hover:text-gray-400 hover:underline"
      >
        Acessar Coffee Delivery <Coffee size={22} />
      </Link>
    </main>
  )
}
