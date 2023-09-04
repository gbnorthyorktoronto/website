'use client'

import Title from "@/app/components/Title"
import { Box, Theme, useTheme } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import kidsAndTeensPhoto from '../../../images/kids-and-teens.png'
import Skill from "@/app/components/Skill"
import StandardPageContainer from "@/app/components/StandardPageContainer"
import GGrey from "@/app/components/GGrey"
import Image from "next/image"

export default function KidsAndTeens() {
  const theme: Theme = useTheme()

  return (
    <>
      <title>Kids and Teens | Gracie Barra North York</title>
      <meta
        name="description"
        content="Gracie Barra helps kids learn about self-defense, responsibility and discipline that will help them succeed in the real world."
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
              className=" items-center sm:items-start"
            >Kids and Teens</Title>
            <BodyText
              className="w-11/12 text-center sm:text-start mb-[25px] sm:mb-0"
              mt={3.5}
            >
              Children and teens of all skill levels and abilities will benefit from Jiu-Jitsu classes at
              Gracie Barra in North York, CA. Our Gracie Barra Kids Program is designed to teach
              children self-discipline as well as providing a unique way to express themselves. Our
              instructors are trained to interact and offer gentle correction for children and teens
              who practice the art of Jiu-Jitsu. Children over the age of three can begin their
              training at any of our 700 Gracie Barra Schools, experiencing the true power of
              brotherhood and integrity.
              Our GBK program is structured similarly to adult courses, with adaptations and
              modifications made to reach the different age ranges in the class. Jiu-Jitsu classes
              for children begin with the building blocks that are needed to teach the fundamentals
              of Jiu-Jitsu. We have developed a curriculum that is structured in a way that shows
              children and teens the value of routine, cooperation and self-awareness.
            </BodyText>
          </Box>
          <Image
            className="w-11/12 sm:w-[500px]"
            width={1000}
            height={1000}
            style={{
              height: 'auto',
            }}
            src={kidsAndTeensPhoto.src}
            alt="Kids and Teens with Jiu-Jitsu clothes"
          />
        </Box>

        <Box
          className="flex-col sm:flex-row items-center sm:items-start mb-[80px] sm:!mb-[30px]"
          display="flex"
          mt={15}
          justifyContent="space-between"
        >
          <BodyText
            className="w-11/12 sm:w-[80%] text-center sm:text-start"
          >
            Practicing Jiu-Jitsu at a Gracie Barra school helps children and teens
            release their energy in a healthy and productive way. Our certified
            instructors teach children to focus their attention on one task at a time,
            honing their abilities and developing critical thinking skills. When children
            learn how to do this, they&apos;ll see a gain in their overall fitness level.
            <br />
            <br />
            The Gracie Barra Brotherhood provides kids and teens with a sense of
            community. We are organized like a team, but fight together like a family.
            This philosophy helps our students build trust and leadership skills with
            every class. Our GB School helps children learn valuable life skills that can
            be used both in and out of the classroom.
            <br />
            <br />
            By joining our Gracie Barra North York team for Jiu-Jitsu classes, children can
            experience a fitness program like no other. Kids and teens alike will enjoy
            a boost in confidence, better focus and critical self-defense skills.
          </BodyText>
          <Box
            className="items-center sm:items-end"
            alignItems="flex-end"
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <BodyText
              className="text-center sm:text-end w-11/12 mt-[25px] sm:mt-0 text-[22px] sm:text-[28px]"
              color={theme.palette.secondary.main}
            >
              Gracie Barra is proud to offer Jiu-Jitsu classes that provide
              children of all ages real-world benefits. By practicing Jiu-Jitsu,
              children learn valuable skills they wouldn&apos;t develop from
              other sports, including:
            </BodyText>
            <Box
              className="w-11/12 sm:w-[730px] justify-center sm:justify-between"
              alignItems="space-between"
              display="flex"
              flexWrap="wrap"
              mt={10}
              height={480}
            >
              <Skill>Coordination</Skill>
              <Skill>Increased Focus and Concentration</Skill>
              <Skill>Self-Defense</Skill>
              <Skill>Goal Setting</Skill>
              <Skill>Confidence</Skill>
              <Skill>Fitness</Skill>
            </Box>
          </Box>
        </Box>
      </StandardPageContainer>
    </>
  )
}
