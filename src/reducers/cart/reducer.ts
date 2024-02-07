import { CoffeeItem } from '@/model/CoffeeItem.type'
import { Order } from '@/model/Order.type'
import { CartActions } from './action.type'

type CartState = {
  cart: CoffeeItem[]
  order: Order | null
}

export function cartReducer(state: CartState, action: CartActions) {
  const draft = { ...state }
  switch (action.type) {
    case 'ADD_ITEM': {
      const itemToUpdate = draft.cart.find(
        (item) => item.id === action.payload.coffee.id,
      )
      if (!itemToUpdate) {
        draft.cart.push(action.payload.coffee)
      } else {
        cartReducer(draft, {
          type: 'INCREMENT_ITEM_QUANTITY',
          payload: itemToUpdate,
        })
      }
      break
    }
    case 'REMOVE_ITEM':
      draft.cart = draft.cart.filter((item) => item.id !== action.payload.id)
      break
    case 'DECREMENT_ITEM_QUANTITY':
      draft.cart.find((i) => i.id === action.payload.id)!.quantity--
      break
    case 'INCREMENT_ITEM_QUANTITY':
      draft.cart.find((i) => i.id === action.payload.id)!.quantity++
      break
    case 'CHECKOUT': {
      draft.order = action.payload.order
      draft.cart = []
      break
    }
    default:
      break
  }
  return draft
}
