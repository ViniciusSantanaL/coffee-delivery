import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { ShoppingCart, Trash } from '@phosphor-icons/react'

export function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center mx-auto w-40 flex-col gap-4">
        <Button>LABEL</Button>
        <Button variant="secondary" icon={Trash}>
          REMOVER
        </Button>
        <Button variant="icon" icon={ShoppingCart} />
      </div>
    </>
  )
}
