'use client'

import { Box, styled } from "@mui/material"

import Title from "../../components/Title"
import BodyText from "../../components/BodyText"
import FreeClassForm from "../../components/FreeClassForm"
import { backgroundHeight, gbPublicInfo } from "../../constants"
import GGrey from "../../components/GGrey"

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
}))

const ContentContainer = styled(Box)(() => ({
  marginBottom: 80,
  display: 'flex',
  flexDirection: 'column',
}))

export default function Contact() {
  return (
    <Container
      className="flex-col sm:flex-row sm:px-[80px] sm:justify-center items-center sm:items-start"
    >
      <GGrey />
      <ContentContainer
        className="items-center	sm:items-start mt-[25px] sm:mt-[128px] sm:mr-[120px] sm:h-[730px]"
      >
        <Title>Contact us today!</Title>
        <BodyText
          className="w-11/12 sm:w-[600px] text-center sm:text-start"
          mt={1}
        >
          Contact us for more information regarding our free class offer or more information about
          Gracie Barra North York, Toronto. <br /><br className="sm:hidden" />

          <b>
            Location: {gbPublicInfo.address}<br />
            Phone: {gbPublicInfo.phone} <br />
            Email: {gbPublicInfo.email}
          </b>
        </BodyText>

        <Title mt={8}>School Hours of operation:</Title>
        <BodyText mt={1}><b>Monday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Tuesday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Wednesday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Thursday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Friday:</b> 6:30am - 10:00pm</BodyText>
        <BodyText mt={1}><b>Saturday:</b> 11:00am - 3:00pm</BodyText>
        <BodyText mt={1}><b>Sunday:</b> CLOSED</BodyText>
      </ContentContainer>
      <FreeClassForm />
    </Container>
  )
}
