import { InputText } from '@/components/Input'
import { SelectItem } from '@/components/SelectItem'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Warning,
} from '@phosphor-icons/react'
import { FieldError, FieldErrors, useForm } from 'react-hook-form'
import { CheckoutFormData, checkoutFormSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentEnum } from '@/model/Order.type'
import { useCart } from '@/contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

type FormProps = {
  formId: string
}

export function CheckoutForm({ formId }: FormProps) {
  const { checkout } = useCart()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  })

  function onSubmit(data: CheckoutFormData) {
    checkout(data)
    navigate('/success')
  }

  function getErrorMessages(errors: FieldErrors<CheckoutFormData>) {
    const errorMessages = []
    if (errors.address) {
      const addressErrors = Object.values(errors.address as FieldError[]).map(
        (error, index) => {
          return { ...error, id: index }
        },
      )
      errorMessages.push(...addressErrors)
    }

    if (errors.paymentType) {
      const paymentError = {
        ...errors.paymentType,
        id: errorMessages.length + 1,
      }
      errorMessages.push(paymentError)
    }
    return errorMessages
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <div className="bg-base-card rounded-md p-10">
        <div className="flex gap-2">
          <MapPinLine size={22} className="fill-yellow-dark" />
          <aside>
            <h3 className="custom-text-m text-base-subtitle">
              Endereço de Entrega
            </h3>
            <span className="custom-text-s text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </aside>
        </div>
        {Object.keys(errors).length !== 0 && (
          <div className="flex items-center gap-3 mt-3">
            <Warning size={22} className="fill-red-500" />
            <div className="flex-grow flex items-center gap-1 flex-wrap">
              {getErrorMessages(errors).map((errorMessage) => (
                <Fragment key={errorMessage.id}>
                  <span className="custom-text-xs font-normal text-red-500">
                    {errorMessage.message}
                  </span>
                  <div className="h-3 w-[1px] bg-red-500 last:hidden"></div>
                </Fragment>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-areas-form md:grid-cols-[200px_1fr_60px] gap-x-3 gap-y-4 mt-8">
          <InputText
            type="number"
            placeholder="CEP"
            containerStyle="md:grid-in-cep"
            {...register('address.zipCode')}
          />

          <InputText
            placeholder="Rua"
            containerStyle="md:grid-in-rua"
            {...register('address.street')}
          />

          <InputText
            placeholder="Número"
            type="number"
            containerStyle="md:grid-in-numero"
            {...register('address.number', { valueAsNumber: true })}
          />

          <InputText
            placeholder="Complemento"
            containerStyle="md:grid-in-complemento"
            {...register('address.complement')}
            optional
          />

          <InputText
            placeholder="Bairro"
            containerStyle="md:grid-in-bairro"
            {...register('address.neighborhood')}
          />

          <InputText
            placeholder="Cidade"
            containerStyle="md:grid-in-cidade"
            {...register('address.city')}
          />

          <InputText
            placeholder="UF"
            containerStyle="md:grid-in-uf"
            {...register('address.state')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 bg-base-card p-10 rounded-md">
        <div className="flex gap-2">
          <CurrencyDollar size={22} className="fill-purple" />
          <aside>
            <h3 className="custom-text-m text-base-subtitle">Pagamento</h3>
            <span className="custom-text-s text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </aside>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <SelectItem
            {...register('paymentType')}
            value={PaymentEnum.CREDIT_CARD}
          >
            <CreditCard className="fill-purple" />
            CARTÃO DE CRÉDITO
          </SelectItem>
          <SelectItem
            {...register('paymentType')}
            value={PaymentEnum.DEBIT_CARD}
          >
            <Bank className="fill-purple" />
            CARTÃO DE DÉBITO
          </SelectItem>
          <SelectItem {...register('paymentType')} value={PaymentEnum.MONEY}>
            <Money className="fill-purple" />
            DINHEIRO
          </SelectItem>
        </div>
      </div>
    </form>
  )
}
