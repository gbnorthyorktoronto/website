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
    <>
      <title>Women&apos;s self defense | Gracie Barra North York</title>
      <meta
        name="description"
        content="The Gracie Women Empowered program is a jiu-jitsu-based women self-defense system which addresses the 15 most common threats against women."
      />

      <StandardPageContainer
        className="px-0 sm:px-[80px]"
      >
        <GGrey />
        <Box
          className="flex-col sm:flex-row items-center sm:items-start mt-[25px] sm:!mt-[160px]"
          display="flex"
          width="100%"
          justifyContent="space-between"
          mb={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            className="items-center sm:items-start sm:w-[60%]"
          >
            <Title
              className="items-center sm:items-start"
            >Women&apos;s Self-Defense</Title>
            <BodyText
              className="w-11/12 text-center sm:text-start"
              mt={3.5}
            >
              Discover empowerment and confidence like never before with the Gracie Barra Women&apos;s Self-Defense Class.
              Step into a supportive and inclusive environment where you&apos;ll learn essential techniques to protect
              yourself and boost your self-assurance. Led by experienced instructors, this class focuses on practical
              skills tailored to real-life situations, ensuring you&apos;re well-prepared and capable. Whether you&apos;re a
              beginner or have some martial arts experience, you&apos;ll find a welcoming community that fosters growth and
              camaraderie. Join us in mastering effective self-defense while building strength, resilience, and
              friendships that last a lifetime. Embrace the opportunity to embrace your inner strength - enroll in the
              Gracie Barra Women&apos;s Self-Defense Class today and embark on a transformative journey of empowerment.
            </BodyText>
          </Box>
          <Image
            className="w-11/12 sm:w-[500px]"
            width={1000}
            height={1000}
            style={{
              height: 'auto',
            }}
            src={WomenSelfDefensePhoto.src}
            alt="Adults fighting Jiu-Jitsu"
          />
        </Box>
      </StandardPageContainer>
    </>
  )
}
