import { AppProps } from 'next/app'
import React from 'react'
import '../../styles/globals.css'
import Wrapper from '../components/wrapper/wrapper'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
