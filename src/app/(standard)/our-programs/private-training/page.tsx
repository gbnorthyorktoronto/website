'use client'

import Title from "@/app/components/Title"
import { Box } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import PrivateTrainingPhoto from '../../../images/private-training.png'
import Techniques from "@/app/components/Techniques"
import StandardPageContainer from "@/app/components/StandardPageContainer"
import GGrey from "@/app/components/GGrey"
import Image from "next/image"

export default function PrivateTraining() {
  return (
    <StandardPageContainer>
      <GGrey />
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box>
          <Title mt={20}>Private Training</Title>
          <BodyText width={700} mt={3.5}>
            Private Jiu-Jitsu lessons in North York, CA strengthen your skills and help you hone specific techniques
            that you learned in class. Private lessons are a great way to gain an edge over the competition and
            advance your abilities on a faster timeline than your peers. Your journey in Jiu-Jitsu is unique and
            the training shows different results for everyone, which is why it&apos;s best to follow a personalized
            approach when learning the art of Jiu-Jitsu. At Gracie Barra, we not only offer comprehensive classes
            for all ages and skill levels, but also encourage our students to take part in a private training course
            to lock in what they have learned in class and further improve on their skills.
            Private training gives you time to overcome problem areas with your instructor and reach critical
            breakthroughs where you might have had challenges before. Your instructor will provide personalized
            training based on your skill level so you can perfect your techniques and even advance beyond the rest
            of the class. Receiving one-on-one time is essential to succeed in your Jiu-Jitsu training.
          </BodyText>
        </Box>
        <Image
          width={628}
          height={678}
          style={{
            marginTop: 50,
          }}
          src={PrivateTrainingPhoto.src}
          alt="Private Jiu-Jitsu class"
        />
      </Box>

      <Box display="flex" flexDirection="column" mt={8} mb={10} alignItems="center">
        <Box mt={10} display="flex" width={1450} height={450} flexWrap="wrap" justifyContent="space-between" alignItems="space-between">
          <Techniques>Learn at your own pace</Techniques>
          <Techniques>Review technique with a trained instructor</Techniques>
          <Techniques>Improve focus and confidence on the mat</Techniques>
          <Techniques>Perfect skills and moves you learn in class</Techniques>
          <Techniques>One-on-one attention to ensure you&apos;re getting the most out of your training</Techniques>
          <Techniques>Results tailored to your individual goals and abilities</Techniques>
        </Box>
        <BodyText width={870} textAlign="center" mt={8.75}>
          Private lessons in Jiu-Jitsu can lessons can help you gain a deeper understanding of the art and take your
          training to the next level. This is the preferred method of training for many of our champions who
          participate in competitions due to the personalized attention each student receives. The one-on-one time
          you get during your private training is essential to learning of Jiu-Jitsu.
        </BodyText>
      </Box>
    </StandardPageContainer>
  )
}
