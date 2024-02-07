import logo from '@/assets/logo.svg'
import { useCart } from '@/contexts/CartContext'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Header() {
  const { cart } = useCart()
  const cartItemsCount = cart.length

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={twMerge(
        'fixed top-0 right-0 w-full z-50 px-4 py-8 transition-all ease-in',
        `${hasScrolled ? 'bg-background shadow-sm' : ''}`,
      )}
    >
      <nav className="max-w-app flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <aside className="flex gap-3">
          <div className="flex gap-1 items-center justify-center p-2 bg-purple-light rounded-md">
            <MapPin size={22} weight="fill" className="fill-purple" />
            <span className="custom-text-s text-purple-dark">
              Porto Alegre, RS
            </span>
          </div>
          <Link
            to={'/checkout'}
            className="p-2 bg-yellow-light rounded-md relative"
          >
            <ShoppingCart
              size={22}
              className="fill-yellow-dark"
              weight="fill"
            />
            <span
              className={twMerge(
                'absolute -top-2 -right-2 flex items-center justify-center',
                'w-5 h-5 bg-yellow-dark p-1 text-white font-bold text-xs rounded-full',
                `${cartItemsCount === 0 ? 'hidden' : ''}`,
              )}
            >
              {cartItemsCount}
            </span>
          </Link>
        </aside>
      </nav>
    </header>
  )
}
