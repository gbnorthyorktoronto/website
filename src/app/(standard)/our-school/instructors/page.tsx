'use client'

import Title from "@/app/components/Title"
import { Box, styled } from "@mui/material"
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
  paddingInline: 80,
}))

const InstructorContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 28,
}))

export default function Schedule() {
  return (
    <Container>
      <GGrey />
      <Title mt={16}>Our Instructors</Title>
      <InstructorContainer>
        <Image
          src={fabianoPhoto.src}
          alt="Instructors Photo"
          width={235}
          height={248}
        />
        <Box mt={3.5} ml={3.5}>
          <Title>Fabiano De Freitas</Title>
          <BodyText width={1300}>
            2nd Degree Black Belt Professor Fabiano de Freitas is the Head Instructor of Gracie Barra North York, Toronto. He was born in Campinas, São Paulo, Brazil.
            With more than 13 years of teaching experience.
          </BodyText>
        </Box>
      </InstructorContainer>
      <InstructorContainer mb={10}>
        <Image
          src={douglasPhoto.src}
          alt="Instructors Photo"
          width={235}
          height={248}
        />
        <Box mt={3.5} ml={3.5}>
          <Title>Douglas Lincoln</Title>
          <BodyText width={1300}>
            Brown Belt Professor Douglas Lincoln Instructor of Gracie Barra North York, Toronto. He was born in Campinas, São Paulo, Brazil. With more than 8 years of
            teaching experience.
          </BodyText>
        </Box>
      </InstructorContainer>
    </Container>
  )
}
