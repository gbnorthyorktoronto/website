'use client'

import { Box, Theme, Typography, styled, useTheme } from '@mui/material'

import backgroundImageDesktop from '../../images/home-page-background-temp.png'
import backgroundImageMobile from '../../images/home-page-background-mobile-temp.png'
import { backgroundHeight } from '@/app/constants';
import Image from 'next/image';
import HeaderPhone from '@/app/components/HeaderPhone';
import TryButton from '@/app/components/TryButton';

const Container = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  height: backgroundHeight,
  overflowY: 'scroll',
  width: '100%',
}));

const GettingStarted = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 900,
}));

const Slogan1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 900,
  position: 'absolute',
}));

const Slogan2 = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, #E2211C 5.42%, #317DC3 70.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`,
  fontWeight: 900,
  position: 'absolute',
}));

export default function Home() {
  const theme: Theme = useTheme()

  return (
    <Container
      className="flex-col sm:flex-row items-center sm:items-start sm:justify-end"
    >
      <Image
        className="hidden sm:block"
        src="/g.svg"
        alt="G background"
        width={1000}
        height={1000}
        sizes="100vw"
        style={{
          height: backgroundHeight,
          position: 'absolute',
          left: -150,
          zIndex: -1,
        }}
      />
      <Slogan1
        className="left-[60px] sm:left-[380px] top-[90px] sm:top-[50px] text-[30px] sm:text-[50px]"
      >Jiu-Jitsu for</Slogan1>
      <Slogan2
        className="left-[30px] sm:left-[450px] top-[135px] sm:top-[120px] text-[40px] sm:text-[80px]"
      >Everyone</Slogan2>
      <Image
        className="hidden sm:block"
        style={{
          height: backgroundHeight,
          position: 'absolute',
          zIndex: -2,
        }}
        src={backgroundImageDesktop.src}
        alt="Background image"
        width={1000}
        height={1000}
        sizes="100vw"
      />
      <Image
        className="sm:hidden"
        style={{
          zIndex: -2,
          width: '100%',
        }}
        width={1000}
        height={300}
        src={backgroundImageMobile.src}
        alt="Background image"
      />
      <HeaderPhone
        marginTop={4}
        sx={{ color: theme.palette.primary.main }}
        className="sm:hidden"
      />
      <GettingStarted
        className="mt-[20px] sm:mt-0 sm:absolute sm:top-[400px] sm:left-[650px] text-[30px] sm:text-[50px] w-[300px] sm:w-[500px] text-center sm:text-end"
      >
        Getting started at Gracie Barra is easy
      </GettingStarted>
      <Box className="hidden sm:block sm:absolute sm:bottom-[85px] sm:left-[755px]">
        <TryButton size='xs' />
      </Box>
      <Box mt={2} className="sm:hidden">
        <TryButton />
      </Box>
    </Container>
  )
}
