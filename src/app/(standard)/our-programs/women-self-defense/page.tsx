'use client'

import Title from "@/app/components/Title"
import { Box } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import WomenSelfDefensePhoto from '../../../images/women-self-defense.png'
import StandardPageContainer from "@/app/components/StandardPageContainer"
import GGrey from "@/app/components/GGrey"
import Image from "next/image"

export default function WomenSelfDefense() {
  return (
    <StandardPageContainer
      className="px-0 sm:px-[80px]"
    >
      <GGrey />
      <Box
        className="flex-col sm:flex-row items-center sm:items-start"
        display="flex"
        width="100%"
        justifyContent="space-between"
        mb={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          className="items-center sm:items-start"
        >
          <Title
            className="mt-[25px] sm:!mt-[160px] items-center sm:items-start"
          >Women&apos;s Self-Defense</Title>
          <BodyText
            className="w-11/12 sm:w-[600px] text-center sm:text-start"
            mt={3.5}
          >
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
          Some text.
          </BodyText>
        </Box>
        <Image
          className="w-11/12 sm:w-[628px]"
          width={1000}
          height={1000}
          style={{
            height: 'auto',
            marginTop: 50,
          }}
          src={WomenSelfDefensePhoto.src}
          alt="Adults fighting Jiu-Jitsu"
        />
      </Box>
    </StandardPageContainer>
  )
}
