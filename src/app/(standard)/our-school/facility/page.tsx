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
  paddingInline: 80,
  display: 'flex',
  justifyContent: 'center',
}))

const ContentContainer = styled(Box)(() => ({
  marginTop: 128,
  marginRight: 230,
  marginBottom: 80,
}))

export default function Schedule() {
  return (
    <Container>
      <GGrey />
      <ContentContainer>
        <Title>Our Facility</Title>
        <BodyText width={300} mt={1}>
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
      <Box width={500}>
        <BodyText width={600} mt={16} mb={2}>
          <b>SCHOOL LOCATION</b>
          <br />
          100 Bridgeland Ave, North York, ON M6A 1Z4
        </BodyText>
        <Map />
      </Box>
    </Container>
  )
}
