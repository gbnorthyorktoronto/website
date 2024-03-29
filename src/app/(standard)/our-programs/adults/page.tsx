'use client'

import Title from "@/app/components/Title"
import { Box } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import AdultsPhoto from '../../../images/adults.png'
import Course from "@/app/components/Course"
import StandardPageContainer from "@/app/components/StandardPageContainer"
import GGrey from "@/app/components/GGrey"
import Image from "next/image"

export default function Adults() {
  return (
    <>
      <title>Adults | Gracie Barra North York</title>
      <meta
        name="description"
        content="Here is a complete breakdown of all of our Adult Brazilian Jiu Jitsu classes and a complete schedule."
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
        >
          <Box
            display="flex"
            flexDirection="column"
            className="items-center sm:items-start sm:w-[60%]"
          >
            <Title
              className="items-center sm:items-start"
            >Adults</Title>
            <BodyText
              className="w-11/12 text-center sm:text-start"
              mt={3.5}
            >
              From the very beginning of Gracie Barra, Master Carlos Gracie Jr. has had one goal in
              mind: Jiu-Jitsu for Everyone. For over 30 years, we have offered classes for adults
              that teach people of all backgrounds and skill levels the art of Jiu-Jitsu. Our
              structured curriculum is designed specifically to help you succeed during your
              training in the art of Jiu-Jitsu.
              We offer a wide range of adult Jiu-Jitsu classes in North York so students can choose the
              class that best suits their needs. We have three tiers of classes that address varying
              degrees of skill and knowledge.
            <br />
            <br />
            <br />
            They are as follows:
            </BodyText>
          </Box>
          <Image
            className="w-11/12 sm:w-[500px]"
            width={1000}
            height={1000}
            style={{
              height: 'auto',
            }}
            src={AdultsPhoto.src}
            alt="Adults fighting Jiu-Jitsu"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          mt={8}
          mb={10}
          alignItems="center"
        >
          <Box
            className="w-11/12 2xl:w-[1174px]"
            mt={10}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="space-between"
          >
            <Course title="GB1">
              This course can be thought of as Jiu-Jitsu for beginners. This course teaches the fundamentals and
              principles of BJJ as well as the skills you need to grow personally in a Jiu-Jitsu lifestyle.
            </Course>
            <Course title="GB2">
            Advance your Jiu-Jitsu game flow during this course. Take your training beyond the fundamentals and begin
            to hone the principles you need to succeed, such as discipline, respect, commitment, and leadership.
            </Course>
            <Course title="GB3">
            This program is designed to help students achieve Black Belt excellence. At this stage, a student will
            begin applying what they learn during their Jiu-Jitsu training to everyday life.
            </Course>
          </Box>
          <BodyText
            className="w-11/12 sm:w-[870px]"
            textAlign="center"
            mt={8.75}
          >
            Our adult Jiu-Jitsu programs are specifically designed with each student&apos;s personal achievement in mind.
            Your personal goals, such as fitness or self-defense, will be taken into account when you sign up.
            Our self-defense classes for men and women are a great way to practice real-world techniques while
            strengthening your mind and body. Gracie Barra students see improvement not only athletically, but also
            mentally as they incorporate Gracie Barra&apos;s proven principles into their lives.
            Jiu-Jitsu classes at Gracie Barra are perfect for any adult in North York, CA who wants to learn a new skill
            in a safe, challenging, and family friendly environment. We offer programs for all skill levels, so you
            can choose to focus on the fundamentals of BJJ or train to get your Black Belt. Contact Gracie Barra today
            for a free class to get started.
          </BodyText>
        </Box>
      </StandardPageContainer>
    </>
  )
}
