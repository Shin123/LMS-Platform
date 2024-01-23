'use client'

import ReactConfetti from 'react-confetti'
import { useConfettiStore } from '@/hooks/use-confett-store'

export const ConfettiProvider = () => {
  const confetti = useConfettiStore()

  if (!confetti.isOpen) return null

  return (
    <ReactConfetti
      className='pointer-events-none z-[100]'
      numberOfPieces={505}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose()
      }}
    />
  )
}
