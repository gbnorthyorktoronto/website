'use client'

import { ReactNode } from 'react'
import { Box, styled } from '@mui/material'

import '../globals.css'

import HeaderInfo from '../components/HeaderInfo'
import Header from '../components/Header'
import HeaderPhone from '../components/HeaderPhone'
import Logo from '../components/Logo'
import HeaderMenu from '../components/HeaderMenu'
import TryButton from '../components/TryButton'
import Address from '../components/Address'
import Footer from '../components/Footer'

const Page = styled(Box)(() => ({
  alignItems: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
}));

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <body>
      <Page>
        <Logo />
        <HeaderInfo>
          <Address />
          <TryButton />
        </HeaderInfo>
        <Header>
          <HeaderMenu />
          <HeaderPhone />
        </Header>
        {children}
        <Footer />
      </Page>
    </body>
  )
}
