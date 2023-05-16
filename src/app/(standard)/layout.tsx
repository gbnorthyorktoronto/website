'use client'

import { ReactNode } from 'react'
import { Box, Theme, styled, useTheme } from '@mui/material'

import '../globals.css'

import HeaderInfo from '../components/HeaderInfo'
import Header from '../components/Header'
import HeaderPhone from '../components/HeaderPhone'
import Logo from '../components/Logo'
import HeaderMenu from '../components/HeaderMenu'
import TryButton from '../components/TryButton'
import Address from '../components/Address'
import Footer from '../components/Footer'
import MenuMobile from '../components/MenuMobile'

const Page = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'space-between',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
}));

// TODO: fix footer

export default function BaseLayout({ children }: { children: ReactNode }) {
  const theme: Theme = useTheme()

  return (
    <body>
      <Page>
        <Logo />
        <HeaderInfo>
          <Address />
          <Box className="hidden sm:block">
            <TryButton />
          </Box>
        </HeaderInfo>
        <Header>
          <HeaderMenu className="hidden sm:flex" />
          <HeaderPhone
            sx={{ color: theme.palette.common.white }}
            className="hidden sm:flex"
          />
        </Header>
        <MenuMobile />
        {children}
        {/* <Footer /> */}
      </Page>
    </body>
  )
}
