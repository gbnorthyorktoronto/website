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
    <StandardPageContainer>
      <GGrey />
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box>
          <Title mt={20}>Kids and Teens</Title>
          <BodyText width={700} mt={3.5}>
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
          width={628}
          height={678}
          style={{
            marginTop: 50,
          }}
          src={kidsAndTeensPhoto.src}
          alt="Kids and Teens with Jiu-Jitsu clothes"
        />
      </Box>

      <Box display="flex" mt={15} mb={10} justifyContent="space-between">
        <BodyText width={550}>
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
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <BodyText textAlign="end" width={900} fontSize={28} color={theme.palette.secondary.main}>
            Gracie Barra is proud to offer Jiu-Jitsu classes that provide
            children of all ages real-world benefits. By practicing Jiu-Jitsu,
            children learn valuable skills they wouldn&apos;t develop from
            other sports, including:
          </BodyText>
          <Box mt={10} display="flex" width={730} height={480} flexWrap="wrap" justifyContent="space-between" alignItems="space-between">
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
  )
}
