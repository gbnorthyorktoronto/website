'use client'

import { Box, styled } from '@mui/material'
import schedule from '../../../images/weekly-schedule.png'
import scheduleMobile1 from '../../../images/weekly-schedule-mobile1.png'
import scheduleMobile2 from '../../../images/weekly-schedule-mobile2.png'
import scheduleMobile3 from '../../../images/weekly-schedule-mobile3.png'
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
      <Title
        className="!mt-[25px] sm:!mt-[128px]"
        mb={5}
      >Our weekly schedule</Title>
      <Image
        className="hidden sm:block"
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
      <Image
        className="sm:hidden"
        src={scheduleMobile1.src}
        alt="Weekly Schedule"
        width={1000}
        height={1000}
        style={{
          height: 'auto',
          maxWidth: '90%',
          marginBottom: 10,
        }}
      />
      <Image
        className="sm:hidden"
        src={scheduleMobile2.src}
        alt="Weekly Schedule"
        width={1000}
        height={1000}
        style={{
          height: 'auto',
          maxWidth: '90%',
          marginBottom: 10,
        }}
      />
      <Image
        className="sm:hidden"
        src={scheduleMobile3.src}
        alt="Weekly Schedule"
        width={1000}
        height={1000}
        style={{
          height: 'auto',
          maxWidth: '90%',
          marginBottom: 80,
        }}
      />
    </Container>
  )
}
