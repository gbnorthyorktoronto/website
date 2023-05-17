'use client'

import Title from "@/app/components/Title"
import { Box, Theme, styled, useTheme } from "@mui/material"
import fabianoPhoto from '../../../images/fabiano-photo.png'
import douglasPhoto from '../../../images/douglas-photo.png'
import BodyText from "@/app/components/BodyText"
import { backgroundHeight } from "@/app/constants"
import GGrey from "@/app/components/GGrey"
import Image from "next/image"

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 80,
}))

const InstructorContainer = styled(Box)(() => ({
  display: 'flex',
  width: '90%',
}))

export default function Schedule() {
  const theme: Theme = useTheme()
  const titleColor = theme.palette.primary.main

  return (
    <Container
      className="items-center sm:items-start px-0 sm:px-[80px]"
    >
      <GGrey />
      <Title
        className="!mt-[25px] sm:!mt-[128px]"
      >Our Instructors</Title>
      <InstructorContainer
        className="flex-col sm:flex-row items-center sm:items-start mt-[65px] sm:mt-[28px] sm:mb-[28px]"
      >
        <Image
          src={fabianoPhoto.src}
          alt="Instructors Photo"
          width={235}
          height={248}
        />
        <Box
          display="flex"
          flexDirection="column"
          className="mt-[28px] sm:mt-0 ml-0 sm:ml-[28px] items-center sm:items-start"
        >
          <Title
            color={titleColor}
            className="mb-[16px]"
          >Fabiano De Freitas</Title>
          <BodyText
            className="text-center sm:text-start"
            width="90%"
          >
            2nd Degree Black Belt Professor Fabiano de Freitas is the Head Instructor of Gracie Barra North York, Toronto. He was born in Campinas, São Paulo, Brazil.
            With more than 13 years of teaching experience.
          </BodyText>
        </Box>
      </InstructorContainer>
      <InstructorContainer
        className="flex-col sm:flex-row items-center sm:items-start mt-[65px] sm:mt-[28px]]"
      >
        <Image
          src={douglasPhoto.src}
          alt="Instructors Photo"
          width={235}
          height={248}
        />
        <Box
          display="flex"
          flexDirection="column"
          className="mt-[28px] sm:mt-0 ml-0 sm:ml-[28px] items-center sm:items-start"
        >
          <Title
            color={titleColor}
            className="mb-[16px]"
          >Douglas Lincoln</Title>
          <BodyText
            className="text-center sm:text-start"
            width="90%"
          >
            Brown Belt Professor Douglas Lincoln Instructor of Gracie Barra North York, Toronto. He was born in Campinas, São Paulo, Brazil. With more than 8 years of
            teaching experience.
          </BodyText>
        </Box>
      </InstructorContainer>
    </Container>
  )
}
