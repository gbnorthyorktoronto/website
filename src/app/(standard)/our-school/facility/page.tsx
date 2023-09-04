'use client'

import Title from "@/app/components/Title"
import { Box, styled } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import { backgroundHeight } from "@/app/constants"
import GGrey from "@/app/components/GGrey"
import Map from "@/app/components/Map"

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
}))

const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 80,
}))

export default function Schedule() {
  return (
    <>
      <title>Facility | Gracie Barra North York</title>
      <meta
        name="description"
        content="At Gracie Barra we want you to have the best Brazilian Jiu Jitsu experience you can have so we have made our school to suit your needs. Our school offers a wide range of programs, private training and a wealth of other benefits and features. Whether you plan to lose weight, tone-up, or train for competition."
      />

      <Container
        className="flex-col sm:flex-row px-0 sm:px-[80px] justify-start sm:justify-center items-center sm:items-start"
      >
        <GGrey />
        <ContentContainer
          className="items-center sm:items-start mr-0 sm:mr-[230px] mt-[25px] sm:mt-[128px]"
        >
          <Title>Our Facility</Title>
          <BodyText
            className="!mt-[25px] sm:!mt-[8px] text-center sm:text-start"
            width={300}
          >
            <b>SCHOOL PHONE NUMBER</b>
            <br />
            (416) 782-8255
            <br />
            <br />
            <b>SCHOOL OURS OF OPERATION</b>
            <br />
            Monday: 6:30am - 10:00pm
            <br />
            Tuesday: 6:30am - 10:00pm
            <br />
            Wednesday: 6:30am - 10:00pm
            <br />
            Thursday: 6:30am - 10:00pm
            <br />
            Friday: 6:30am - 10:00pm
            <br />
            Saturday: 11:00am - 3:00pm
            <br />
            Sunday: CLOSED
          </BodyText>
        </ContentContainer>
        <Box
          className="w-11/12 sm:w-[500px]"
        >
          <BodyText
            className="mt-0 sm:!mt-[128px] w-11/12 sm:w-[500px] text-center sm:text-start"
            mb={2}
          >
            <b>SCHOOL LOCATION</b>
            <br />
            100 Bridgeland Ave, North York, ON M6A 1Z4
          </BodyText>
          <Map />
        </Box>
      </Container>
    </>
  )
}
