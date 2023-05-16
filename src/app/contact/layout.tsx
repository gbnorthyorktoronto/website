'use client'

import { ReactNode } from 'react'
import { Box, Typography, styled } from '@mui/material'

import '../globals.css'

import HeaderInfo from '../components/HeaderInfo'
import Header from '../components/Header'
import MenuItemButton from '../components/MenuItemButton'
import Logo from '../components/Logo'
import HeaderMenu from '../components/HeaderMenu'
import Footer from '../components/Footer'

const Page = styled(Box)(() => ({
  alignItems: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
}));

export default function ContactLayout({ children } : { children: ReactNode }) {
  return (
    <body>
      <Page>
        <Logo />
        <HeaderInfo>
          {/* <Box display="flex" /> */}
        </HeaderInfo>
        <Header>
          <HeaderMenu />
        </Header>
        {children}
        <Footer />
      </Page>
    </body>
  )
}
