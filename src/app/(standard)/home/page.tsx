'use client'

import { Box, Typography, styled } from '@mui/material'

import backgroundImage from '../../images/home-page-background.png'
import { backgroundHeight } from '@/app/constants';
import Image from 'next/image';

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}));

const Slogan1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 50,
  fontWeight: 900,
  position: 'absolute',
  bottom: 134,
  right: 42,
}));

const Slogan2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 80,
  fontWeight: 900,
  position: 'absolute',
  bottom: 30,
  right: 80,
}));

export default function Home() {
  return (
    <Container>
      <Image
        src="/g.svg"
        alt="G background"
        width={1000}
        height={1000}
        sizes="100vw"
        style={{
          height: backgroundHeight,
          position: 'absolute',
          left: -140,
          zIndex: -1,
        }}
      />
      <Slogan1>Jiu-Jitsu for</Slogan1>
      <Slogan2>Everyone</Slogan2>
      <Image
        style={{
          zIndex: -2,
        }}
        src={backgroundImage.src}
        alt="Background image"
        fill={true}
        sizes="(max-width: 100%) 100vw"
      />
    </Container>
  )
}
