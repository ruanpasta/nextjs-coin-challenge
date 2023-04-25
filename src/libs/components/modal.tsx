import { ModalContainer, ModalWrapper } from '@/styles/libs/components/modal'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  children: React.ReactNode
}

export default function ModalComponent({ isOpen, onClose, children }: ModalProps) {
  const closeModal = () => onClose()

  return (
    <ModalContainer opened={isOpen} onClick={closeModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
    </ModalContainer>
  )
}
