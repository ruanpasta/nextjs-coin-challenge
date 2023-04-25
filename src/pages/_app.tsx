import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'

globalStyles()

import 'react-tooltip/dist/react-tooltip.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
