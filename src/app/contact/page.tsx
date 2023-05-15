'use client'

import { Box, styled } from "@mui/material"

import Title from "../components/Title"
import BodyText from "../components/BodyText"
import FreeClassForm from "../components/FreeClassForm"
import { backgroundHeight, gbInfo } from "../constants"
import GGrey from "../components/GGrey"

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
  marginRight: 120,
  marginBottom: 80,
  height: 730,
}))

export default function Contact() {
  return (
    <Container>
      <GGrey />
      <ContentContainer>
        <Title>Contact us today!</Title>
        <BodyText width={600} mt={1}>
          Contact us for more information regarding our free class offer or more information about
          Gracie Barra North York, Toronto. <br />

          <b>
            Location: {gbInfo.address}<br />
            Phone: {gbInfo.phone} <br />
            Email: {gbInfo.email}
          </b>
        </BodyText>

        <Title mt={8}>School Hours of operation:</Title>
        <BodyText mt={1}><b>Monday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Tuesday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Wednesday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Thursday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Friday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText><b>Saturday:</b> 11:00am - 3:00pm</BodyText>
        <BodyText><b>Sunday:</b> CLOSED</BodyText>
      </ContentContainer>
      <FreeClassForm />
    </Container>
  )
}
