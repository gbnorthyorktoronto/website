'use client'

import Title from "@/app/components/Title"
import { Box, styled } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import { backgroundHeight } from "@/app/constants"
import GGrey from "@/app/components/GGrey"

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
}))

const ContentContainer = styled(Box)(() => ({
  marginBottom: 80,
}))

export default function WhyGracieBarra() {
  return (
    <>
      <title>Why Gracie Barra | North York</title>
      <meta
        name="description"
        content="Gracie Barra is a worldwide community of Jiu-Jitsu instructors, students and athletes."
      />


      <Container className="px-[20px] sm:px-[80px]">
        <GGrey />
        <ContentContainer
          display="flex"
          flexDirection="column"
          className="mt-[25px] sm:mt-[128px] items-center sm:items-start"
        >
          <Title>Why Gracie Barra</Title>
          <BodyText width="98%" mt={3}>
            <b>1. GB Jiu-Jitsu in North York is a truly exciting way to get fit</b>
            <br />
            <br className="sm:hidden" />
            Jiu-Jitsu is often likened to a game of human chess. If you don&apos;t like to work out
            at a gym because you get bored, you&apos;re not alone. Many of our students were tired
            of going to the gym, and they couldn&apos;t find new songs or audio books to entertain
            them on the treadmill. They found Jiu-Jitsu to be the perfect workout because it
            requires a high level of concentration proportional to the amount of calories burned
            and pounds lost. What&apos;s more, you&apos;ll still learn to defend yourself. It&apos;s a
            win-win situation.
            <br />
            <br />
            <b>2. At, Gracie Barra North York people are committed to your progress in learning</b>
            <br />
            <br className="sm:hidden" />
            The folks at GB make our school what it is, and you too will soon be one of us.
            You&apos;ll be impressed by how committed each and every team member is to your learning.
            The instructors, staff and other students make our environment friendly yet demanding and
            challenging, which stimulates all of us to achieve our best.
            <br />
            <br />
            <b>3. The renowned Gracie Barra structure makes your journey in learning smooth and enjoyable</b>
            <br />
            <br className="sm:hidden" />
            The class structure is the trademark of all Gracie Barra Schools. Classes start on time
            and adhere to a standardized curriculum and class structure. As a student of Gracie Barra
            North York, you know up front what is expected of you and have a clear understanding of what
            to expect from your instructors and training partners. The consistency of this structure
            combined with the creativity and innovation of our devoted instructors blend perfectly
            to facilitate your progress.
            <br />
            <br />
            <b>4. GB Community will change your life forever</b>
            <br />
            <br className="sm:hidden" />
            When you join Gracie Barra North York, you are not just getting classes. You become part of
            a community united by the ideals of the Jiu-Jitsu lifestyle. Special classes and side events
            coupled with ordinary classes create a fun and exciting calendar of activities that you
            and your family will love to take part in.
            <br />
            <br />
            <b>5. GB Fighting Techniques will be useful outside the mats, in real-life situations</b>
            <br />
            <br className="sm:hidden" />
            You don&apos;t come to class just to learn how to fight. You also work hard toward mastering
            the underlying principles that allow you to succeed on the mats. When applied to your life
            off the mats, these principles can bring more balance to your routine and help you reach
            your true potential.
            <br />
            <br />
            <b>6. You can train all over the world</b>
            <br />
            <br className="sm:hidden" />
            You are free to train at any location while traveling. So whether you&apos;re in , or ,
            you&apos;ve got a Gracie Barra school close to you.
            <br />
            <br />
            <b>7. Gracie Barra North York is an Environment for the Whole Family</b>
            <br />
            <br className="sm:hidden" />
            One of the most unique characteristics about our schools is our family-orientated approach.
            Gracie Barra is proud to be a powerhouse with the most stalwart champions of Jiu-Jitsu in
            the world while still maintaining a training environment that is welcoming for the whole
            family: men, women, and children. At Gracie Barra, families find marvelous activities
            through which to spend quality time together.
            <br />
            <br />
            <b>8. You will train in germ-free facilities</b>
            <br />
            <br className="sm:hidden" />
            Cleanliness is a top priority at Gracie Barra North York. Our schools adhere to the strict
            standard of cleanliness and hygiene set by Gracie Barra. GB School staff clean the facilities
            constantly, and all GB uniforms are washed regularly. Our GB School mats are cleaned on
            a daily basis with a specially designed cleaning agent that neutralizes bacteria, fungus
            and odors without detriment to the equipment.
            <br />
            <br />
            <b>9. You couldn&apos;t find a safer environment</b>
            <br />
            <br className="sm:hidden" />
            Student safety is our instructors&apos; primary goal. Training sessions are supervised at all
            times, and we have CPR-trained personnel on duty during every class.
            <br />
            <br />
            <b>10. Our more than 30 years of experience assure you a link to our art&apos;s roots</b>
            <br />
            <br className="sm:hidden" />
            A certified Gracie Barra Black Belt instructor is responsible for teaching classes and
            is committed to Keeping the Legacy Alive. Our team of instructors are trained in the
            teaching philosophy and methods of Master Carlos Gracie Jr., the founder of Gracie Barra.
            A legacy of over 30 years of teaching experience is at your service, so you don&apos;t have
            to worry: you and your family are in great hands at Gracie Barra North York.
          </BodyText>
        </ContentContainer>
      </Container>
    </>
  )
}
