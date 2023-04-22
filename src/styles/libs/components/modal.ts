import { styled } from "@/styles"

export const ModalContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 100,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',

  variants: {
    opened: {
      false: {
        display: 'none'
      }
    }
  }
})

export const ModalWrapper = styled('div', {
  backgroundColor: 'white',
  borderRadius: '4px',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
  maxWidth: '600px',
  padding: '20px',
})
