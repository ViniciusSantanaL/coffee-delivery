import { CoffeeItem } from '@/model/CoffeeItem.type'
import { Order } from '@/model/Order.type'

type AddItemAction = {
  type: 'ADD_ITEM'
  payload: {
    coffee: CoffeeItem
  }
}

type RemoveItemAction = {
  type: 'REMOVE_ITEM'
  payload: {
    id: string
  }
}

type DecrementItemQuantityAction = {
  type: 'DECREMENT_ITEM_QUANTITY'
  payload: {
    id: string
  }
}

type IncrementItemQuantityAction = {
  type: 'INCREMENT_ITEM_QUANTITY'
  payload: {
    id: string
  }
}

type CheckoutAction = {
  type: 'CHECKOUT'
  payload: {
    order: Order
  }
}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | DecrementItemQuantityAction
  | IncrementItemQuantityAction
  | CheckoutAction
