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
      <Box display="flex" width="100%" justifyContent="space-between" mb={10}>
        <Box>
          <Title mt={20}>Women&apos;s Self-Defense</Title>
          <BodyText width={700} mt={3.5}>
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
            Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
          Some text.
          </BodyText>
        </Box>
        <Image
          width={628}
          height={678}
          style={{
            marginTop: 50,
          }}
          src={WomenSelfDefensePhoto.src}
          alt="Adults fighting Jiu-Jitsu"
        />
      </Box>
    </StandardPageContainer>
  )
}
