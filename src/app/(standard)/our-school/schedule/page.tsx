'use client'

import { Box, styled } from '@mui/material'
import schedule from '../../../images/weekly-schedule.png'
import Title from '@/app/components/Title';
import { backgroundHeight } from '@/app/constants';
import GGrey from '@/app/components/GGrey';
import Image from 'next/image';

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Instructors() {
  return (
    <Container>
      <GGrey />
      <Title mt={16} mb={5}>Our weekly schedule</Title>
      <Image
        src={schedule.src}
        alt="Weekly Schedule"
        width={1440}
        height={1000}
        style={{
          height: 'auto',
          maxWidth: '80%',
          marginBottom: 80,
        }}
      />
    </Container>
  )
}
