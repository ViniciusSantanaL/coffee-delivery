import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type SelectItemProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'name'
> & {
  value: string
  name: string
}

const selectStyle = twMerge(
  'flex items-center gap-3 p-4',
  'bg-base-button text-base-text custom-base-text button-m rounded-md border',
  'hover:bg-base-hover hover:text-base-subtitle',
  'peer-checked:bg-purple-light peer-checked:border-purple',
)

export function SelectItem({
  value,
  name,
  children,
  ...rest
}: PropsWithChildren<SelectItemProps>) {
  return (
    <div className="w-full">
      <input
        id={value}
        value={value}
        name={name}
        className="hidden peer"
        type="radio"
        {...rest}
      />
      <label htmlFor={value} className={selectStyle}>
        {children}
      </label>
    </div>
  )
}
