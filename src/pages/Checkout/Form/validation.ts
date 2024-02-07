import { PaymentEnum } from '@/model/Order.type'
import { z } from 'zod'

export const checkoutFormSchema = z.object({
  address: z.object({
    zipCode: z.coerce
      .string({
        required_error: 'Informe o CEP',
      })
      .min(1, {
        message: 'Informe o CEP',
      }),
    street: z
      .string({
        required_error: 'Informe a Rua',
        invalid_type_error: 'Informe a Rua',
      })
      .min(1, {
        message: 'Informe a Rua',
      }),
    number: z.number({
      required_error: 'Informe o Número',
      invalid_type_error: 'Informe o Número',
    }),
    complement: z.string().optional(),
    neighborhood: z
      .string({
        required_error: 'Informe o Bairro',
      })
      .min(1, {
        message: 'Informe o Bairro',
      }),
    city: z
      .string({
        required_error: 'Informe a Cidade',
      })
      .min(1, {
        message: 'Informe a Cidade',
      }),
    state: z
      .string({
        required_error: 'Informe o Estado',
      })
      .min(1, {
        message: 'Informe o Estado',
      }),
  }),
  paymentType: z.nativeEnum(PaymentEnum, {
    required_error: 'Informe o Meio de Pagamento',
    invalid_type_error: 'Informe o Meio de Pagamento',
  }),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>
