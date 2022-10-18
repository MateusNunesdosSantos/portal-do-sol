import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'

import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
