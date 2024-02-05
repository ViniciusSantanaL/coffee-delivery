import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerStyle?: string
}
const buttonStyle = twMerge(
  'w-full bg-base-input p-3 rounded text-base-text peer',
  'focus:bg-base-button border focus:border-yellow-dark focus:outline-none',
  'placeholder:text-base-label custom-text-s',
)
export function InputText({
  optional,
  containerStyle,
  ...rest
}: InputTextProps) {
  return (
    <div className={twMerge('relative w-full', containerStyle)}>
      <input {...rest} className={buttonStyle} type="text" />
      {optional && (
        <span className="text-base-label absolute top-3.5 right-3 custom-text-xs font-normal italic hidden peer-placeholder-shown:inline">
          Opicional
        </span>
      )}
    </div>
  )
}
