import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const redirect = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(redirect)
  }, [router])

  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>Você será redirecionado para a página inicial em 3 segundos...</p>
    </div>
  )
}
