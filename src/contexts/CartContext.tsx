import { CoffeeItem } from '@/model/CoffeeItem.type'
import { Order } from '@/model/Order.type'
import { cartReducer } from '@/reducers/cart/reducer'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'

type CartContextType = {
  cart: CoffeeItem[]
  order: Order | null
  addItem: (item: CoffeeItem) => void
  removeItem: (id: string) => void
  decrementItemQuantity: (id: string) => void
  incrementItemQuantity: (id: string) => void
  checkout: (order: Order) => void
}

const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

const cartInitialData = {
  cart: [],
  order: null,
}

function getInitialCartData(initialData: typeof cartInitialData) {
  const cartDataStoredAsJson = localStorage.getItem(
    '@coffee-delivery:cart-data-1.0.0',
  )
  if (cartDataStoredAsJson) {
    return JSON.parse(cartDataStoredAsJson)
  }
  return initialData
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    cartInitialData,
    getInitialCartData,
  )

  useEffect(() => {
    if (cart) {
      const cartDataJson = JSON.stringify(cart)

      localStorage.setItem('@coffee-delivery:cart-data-1.0.0', cartDataJson)
    }
  }, [cart])

  function addItem(coffee: CoffeeItem) {
    dispatch({ type: 'ADD_ITEM', payload: { coffee } })
  }

  function removeItem(id: string) {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  function decrementItemQuantity(id: string) {
    dispatch({ type: 'DECREMENT_ITEM_QUANTITY', payload: { id } })
  }

  function incrementItemQuantity(id: string) {
    dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: { id } })
  }

  function checkout(order: Order) {
    dispatch({ type: 'CHECKOUT', payload: { order } })
  }

  const values = {
    ...cart,
    addItem,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
    checkout,
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
