export type Address = {
  zipCode: string
  street: string
  number: number
  city: string
  neighborhood: string
  state: string
  complement?: string
}

export enum PaymentEnum {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

export type Order = {
  paymentType: PaymentEnum
  address: Address
}
