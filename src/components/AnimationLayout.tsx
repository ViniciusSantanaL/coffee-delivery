import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

export function AnimatedLayout({ children }: PropsWithChildren) {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname} // Use a localização atual como chave para o componente
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
