'use client'

import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import './globals.css'
import { lightTheme } from './theme/theme'
import { RecoilRoot } from 'recoil'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Gracie Barra North York</title>
        <meta name="description" content="Gracie Barra North York Jiu-Jitsu" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css' rel='stylesheet' />
        {/* <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script> */}
      </head>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </html>
  )
}
