import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'

import reduxWrapper from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Redux 적용 (for Next.js)
export default reduxWrapper.withRedux(MyApp)
