import { InputText } from '@/components/Input'
import { SelectItem } from '@/components/Select'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

export function Form() {
  return (
    <form className="flex flex-col gap-3">
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

        <div className="grid grid-areas-form grid-cols-[200px_1fr_60px] gap-x-3 gap-y-4 mt-8">
          <InputText placeholder="CEP" containerStyle="grid-in-cep" />

          <InputText placeholder="Rua" containerStyle="grid-in-rua" />

          <InputText placeholder="Número" containerStyle="grid-in-numero" />
          <InputText
            placeholder="Complemento"
            containerStyle="grid-in-complemento"
            optional
          />

          <InputText placeholder="Bairro" containerStyle="grid-in-bairro" />
          <InputText placeholder="Cidade" containerStyle="grid-in-cidade" />
          <InputText placeholder="UF" containerStyle="grid-in-uf" />
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

        <div className="flex gap-3">
          <SelectItem name="group" value="1">
            <CreditCard className="fill-purple" />
            CARTÃO DE CRÉDITO
          </SelectItem>
          <SelectItem name="group" value="2">
            <Bank className="fill-purple" />
            CARTÃO DE DÉBITO
          </SelectItem>
          <SelectItem name="group" value="3">
            <Money className="fill-purple" />
            DINHEIRO
          </SelectItem>
        </div>
      </div>
    </form>
  )
}
