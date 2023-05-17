'use client'

import Title from "@/app/components/Title"
import { Box, Typography, styled } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import { backgroundHeight } from "@/app/constants"
import GGrey from "@/app/components/GGrey"
import values from '../../images/values.jpeg'
import Image from "next/image"
import excellencePhoto from '../../images/excellence.jpg'
import athleticPerformancePhoto from '../../images/athletic-performance.jpg'
import { ReactNode } from "react"
import { FormatQuote } from "@mui/icons-material"

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
}))

const WhiteBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: 40,
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)',
}))

const Section = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}))

const ContentContainer = styled(Box)(() => ({}))

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 350,
  wordWrap: 'break-word',
  lineHeight: 1.5,
  fontStyle: 'italic',
  textAlign: 'center',
  color: theme.palette.primary.main,
}))

const QuoteContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  marginTop: 24,
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  paddingInline: 20,
  paddingTop: 10,
  backgroundColor: theme.palette.common.white,
}))

const QuoteIcon = styled(FormatQuote)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 70,
  width: 70,
  marginBottom: 10,
}))

const Quote = ({
  children,
  textWidth,
  width,
  height,
}: {
  children: ReactNode;
  textWidth: number;
  width: number
  height: number
}) => {
  return (
    <QuoteContainer
      pb={2}
      className={`w-11/12 sm:w-[${width}px]`}
    >
      <QuoteIcon />
      <Text
        width="98%"
      >
        {children}
      </Text>
    </QuoteContainer>
  )
}

export default function WeAreGracieBarra() {
  return (
    <Container
      className="px-0 sm:px-[80px]"
    >
      <GGrey />
      <Box
        className="mt-[25px] sm:mt-[128px]"
      >
        <Section
          className="flex-col sm:flex-row sm:h-full sm:mb-[80px]"
        >
          <ContentContainer
            display="flex"
            className="w-11/12 sm:w-[45%] flex-col items-center sm:items-start"
          >
            <Title
              className="text-center sm:text-start"
            >Brotherhood, Integrity, Development</Title>
            <BodyText
              className="w-11/12 sm:w-[700px] text-center sm:text-start mt-[25px]"
              lineHeight={1.75}
            >
              In a lifetime dedicated to the growth and development of Brazilian Jiu-Jitsu,
              Master Carlos Gracie Jr. has always guided his efforts and actions by the values of
              brotherhood, expansion, and integrity. Simply stated by himself:
            </BodyText>
            <Box
              display="flex"
              justifyContent="center"
              className="w-11/12 sm:w-[700px] mt-[25px] sm:mt-0"
            >
              <Quote
                width={700}
                textWidth={650} height={250}>
                &quot;My life is dedicated to Jiu-Jitsu. My goal was simply to build a brotherhood to
                lead the expansion of Jiu-Jitsu while respecting the essence of our art. My students
                are an extension of my family. I want each one of them to achieve their personal best
                while helping spread Jiu-Jitsu. We must do that honoring the traditions and efforts
                of those who came before us.&quot; - Carlos Gracie Jr.
              </Quote>
            </Box>
            <BodyText
              className="w-11/12 sm:w-[700px] text-center sm:text-start mt-[50px] sm:mt-[25px]"
              lineHeight={1.75}
            >
              The values and principles that build Master Carlos Gracie Jr.&apos;s personal philosophy have
              defined to a great extent the culture of Gracie Barra North York. The table to the right
              summarizes each one of Carlos&apos; core values and how they have impacted Gracie Barra as an
              organization:
            </BodyText>
          </ContentContainer>
          <ContentContainer
            className="w-11/12 sm:w-[45%]"
          >
            <Image
              className="sm:mt-[50px]"
              src={values.src}
              alt="Gracie Barra Values"
              width={1000}
              height={1000}
              style={{
                height: 'auto',
              }}
            />
          </ContentContainer>
        </Section>

        <Section
          className="flex-col sm:flex-row sm:h-full sm:mb-[80px]"
        >
          <ContentContainer
            className="w-11/12 sm:w-[45%]"
          >
            <Image
              className="mt-[50px] sm:mt-0"
              src={excellencePhoto.src}
              alt="Jiu-Jitsu Class"
              width={620}
              height={1000}
              style={{
                boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)',
                height: 'auto',
              }}
            />
          </ContentContainer>
          <ContentContainer
            display="flex"
            flexDirection="column"
            className="w-11/12 sm:w-[45%] mt-[25px] sm:mt-0 items-center sm:items-start"
          >
            <Title>Excellence</Title>
            <BodyText
              className="w-11/12 sm:w-[700px] text-center sm:text-start"
              lineHeight={1.75} mt={3}
            >
              Our team color is the red, our team flag is the Red Shield. The Red Shield connects the
              Gracie Barra community, our students taking their first class, our Black Belts graduating,
              our athletes in battle, our instructors teaching, our Schools keeping the legacy alive.
              <br />
              <br />
              The Red Shield was created by Master Carlos Gracie Jr. with the purpose of unifying all
              of those who represent Gracie Barra, defend the Red Shield and pass forward the legacy
              transferred down from Grandmaster Carlos Gracie, and other Jiu-Jitsu legends such as Hélio
              Gracie, Rolles Gracie and Carlos Gracie Jr.
              <br />
              <br />
              The Red Shield&apos;s credibility was built over the years through hard work and excellence
              shown by the Gracie Barra students, athletes and instructors involved in sport Jiu-Jitsu
              competitions, teaching programs and community work. The Gracie Barra Red Shield is one of
              the most recognized symbols in Jiu-Jitsu today and all of those who carry it feel a deep
              sense of loyalty and commitment to Master Carlos Gracie Jr, Gracie Barra and the Jiu-Jitsu
              for Everyone movement.
            </BodyText>
          </ContentContainer>
        </Section>

        <Section
          className="flex-col sm:flex-row sm:h-full sm:mb-[80px]"
        >
          <ContentContainer
            display="flex"
            flexDirection="column"
            className="w-11/12 sm:w-[45%] mt-[25px] sm:mt-0 items-center sm:items-start"
          >
            <Title>Athletic Performance</Title>
            <BodyText
              className="w-11/12 sm:w-[700px] text-center sm:text-start"
              lineHeight={1.75} mt={3}
            >
              Athletics at Gracie Barra North York is represented by a sport Jiu-Jitsu competition team
              known as EQUIPE GB. Athletics within Gracie Barra builds community and pride through the
              engagement of students, staff, parents, and friends, and creates a portal through which
              everyone can enjoy the GB experience. Successful athletic performance generates a unique
              excitement across the Gracie Barra Schools and community, help strengthen bonds among the
              various arms of our organization, build students loyalty in a healthy manner, and give
              Gracie Barra members yet another reason to be proud to represent the legacy of Master
              Carlos Gracie Jr. and defend the red shield.
              <br />
              <br />
              Athletic participation helps Gracie Barra students grow, learn, and enjoy themselves
              while developing their body, mind and spirit. Our competition team, values the lessons
              that have long been taught by sport Jiu-Jitsu competitions: the pursuit of excellence
              through personal development and teamwork, ethical and responsible behavior on and off
              the mats, leadership and strength of character, and sportsmanship - respect for one&apos;s
              opponents, acceptance of victory with humility, and acknowledgement of defeat with grace.
              By embracing these values, EQUIPE GB members create habits which will lead to a better
              lifestyle and well-being. While winning is not an end in itself, at Gracie Barra North York
              we believe that the efforts by our athletes to be their best will lead them to succeed
              throughout their lives.
            </BodyText>
          </ContentContainer>
          <ContentContainer
            className="w-11/12 sm:w-[45%]"
          >
            <Image
              className="mt-[50px] sm:mt-0"
              src={athleticPerformancePhoto.src}
              alt="Jiu-Jitsu Tournament"
              width={620}
              height={1000}
              style={{
                boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)',
                height: 'auto',
              }}
            />
          </ContentContainer>
        </Section>

        <Section
          className="flex-col sm:flex-row sm:h-full sm:mb-[80px]"
        >
          <ContentContainer
            className="w-11/12 sm:w-[45%]"
          >
            <WhiteBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              className="mt-[50px] sm:mt-0"
            >
              <Title
                textAlign="center"
              >Gratitude, Appreciation, Legacy</Title>
              <BodyText
                width="95%"
                textAlign="center"
                lineHeight={1.75} mt={3}
              >
                We all should learn from our past to educate the future. The pictures on the walls of
                every Gracie Barra School tell our story from the early twentieth century to today.
                First in line, Mitsuyo Maeda, the Japanese with unparalleled skill who brought the
                gentle art to Brazil. Next, Carlos Gracie Sr., Maeda&apos;s first student and the first
                Gracie to ever learn Jiu-Jitsu. Third, Hélio Gracie, Carlos&apos; brother and the best
                Gracie fighter of his time. Fourth, Rolls Gracie, a true jiu jitsu innovator and
                champion of Brazilian jiu jitsu philosophy. And finally, Carlos Gracie, Jr., the
                founder of Gracie Barra, and the visionary of the Jiu-Jitsu for everyone project. Its
                our tradition of recollecting the lives of great Masters and practitioners, both as a
                mark of gratitude and appreciation, and as a source of inspiration from which we may
                still learn.
              </BodyText>
            </WhiteBox>
          </ContentContainer>
          <ContentContainer
            className="w-11/12 sm:w-[45%]"
          >
            <WhiteBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              className="mt-[50px] sm:mt-0"
            >
              <Title
                textAlign="center"
              >♫ Uh é Gracie Barra Aha Uhu ♫</Title>
              <BodyText
                width="95%"
                textAlign="center"
                lineHeight={1.75} mt={3}
              >
                In times of trouble, or when we have a challenge ahead, we know the importance of
                family and friends. In the sporting arena is no different. Whenever an athlete enters
                the arena of competition, the positive energy of the crowd is contagious and makes
                it can make his performance grow.
                <br />
                <br />
                To prove that our motto is true and show that we really are organized as a team and we
                fight like family, Gracie Barra calls all who carry the Red Shield GB on their chest to
                unite in one crowd, supporting our competitors with a unique energy coming from different
                neighborhoods, cities, states and even countries.
                <br />
                <br />
                Therefore, in the next competition look around in the venue and find the ones wearing
                the red shirts or holding the Gracie Barra flag and join this family, your family, and
                this increasingly strong support, which is only going to keep growing. The harmony
                between the schools will help Gracie Barra become even greater.
                still learn.
              </BodyText>
            </WhiteBox>
          </ContentContainer>
        </Section>
        <Box
          className="mt-[50px] sm:mt-0"
          mb={10}
          width="100%"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="95%"
          >
            <Title
              className="text-center sm:text-start"
            >Unity, Pride</Title>
            <BodyText
              width="100%"
              className="text-center sm:text-start"
              lineHeight={1.75} mt={3}
            >
              How we dress identifies us as a group and sets, for many people, the values we represent.
              What we use transmits to the others an idea about who we are. <b>Wearing the red shirt is
              representing the GB Family.</b>
              <br />
              <br />
              The &quot;Proud to be part of this GB Family&quot; is stamped on the Red Shield. And have
              you ever wondered why the red color?
            </BodyText>

            <Quote textWidth={900} width={1050} height={170}>
              &quot;I want red because it represents heart, blood, and love; All my students fight with
              heart, have GB Jiu-Jitsu in their blood, and they love our team… Gracie Barra!&quot; -
              Master Carlos Gracie Jr.
            </Quote>

            <BodyText
              width="100%"
              className="text-center sm:text-start"
              lineHeight={1.75} mt={3}
            >
              <b>Wearing the red shirt is saying it loudly to the world: I believe in Gracie Barra.</b>
              <br />
              <br />
              The red shirt seeks to promote a sense of unity among the members of the GB team around the
              world. It promotes unity, support, equality, identity, philosophy and proud of being part of
              Gracie Barra. Wearing the red shirt is saying: I am a Gracie Barra North York Team Member.
              <br />
              <br />
              The red shirt seeks respect, brotherhood, friendship, loyalty and love for the GB Team.
              <b> Wearing the red shirt is having it on your chest: I am Gracie Barra!</b>
            </BodyText>

            <Quote textWidth={900} width={1050} height={220}>
              &quot;When I put the red t-shirt on and drive to the tournament…I automatically
              become someone stronger, faster, and unbeatable…because I know that, there will be
              hundreds of GB brothers and sisters wearing the same t-shirt, representing the same
              values, and supporting me on the battlefield by either competing along side with me,
              or cheering from the stands. That&apos;s Gracie Barra!&quot;- Prof. Philipe Della Monica
            </Quote>

            <BodyText
              width="100%"
              className="text-center sm:text-start"
              lineHeight={1.75} mt={3}
            >
              Around the world people are faced with the GB red sea. They identify our uniform
              and know that there exists a family member from Gracie Barra defending our mentality,
              representing our philosophy and our values. Wearing the red shirt means keeping our
              legacy alive.
            </BodyText>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
