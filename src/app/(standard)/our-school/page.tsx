'use client'

import Title from "@/app/components/Title"
import { Box, Button, Dialog, ImageList, ImageListItem, styled } from "@mui/material"
import BodyText from "@/app/components/BodyText"
import { backgroundHeight } from "@/app/constants"
import GGrey from "@/app/components/GGrey"
import { useImagePopperState, useSetImagePopperState } from '@/app/state/image-popper'

import schoolFront1 from '../../images/image-list/school-front1.jpeg'
import schoolFront2 from '../../images/image-list/school-front2.jpeg'
import store from '../../images/image-list/store.jpeg'
import classRoom1 from '../../images/image-list/class-room1.jpeg'
import classRoom2 from '../../images/image-list/class-room2.jpeg'
import classRoom3 from '../../images/image-list/class-room3.jpeg'
import classRoom4 from '../../images/image-list/class-room4.jpeg'
import classRoom5 from '../../images/image-list/class-room5.jpeg'
import fightClass from '../../images/image-list/fight-class.jpeg'
import medals1 from '../../images/image-list/medals1.jpeg'
import medals2 from '../../images/image-list/medals2.jpeg'
import Image from "next/image"

const itemData = [
  {
    title: 'School Front Winter',
    img: schoolFront1,
  },
  {
    title: 'School Front Summer',
    img: schoolFront2,
  },
  {
    title: 'Store',
    img: store,
  },
  {
    title: 'Classroom 1',
    img: classRoom1,
  },
  {
    title: 'Classroom 2',
    img: classRoom2,
  },
  {
    title: 'Classroom 3',
    img: classRoom3,
  },
  {
    title: 'Classroom 4',
    img: classRoom4,
  },
  {
    title: 'Classroom 5',
    img: classRoom5,
  },
  {
    title: 'Fight Class',
    img: fightClass,
  },
  {
    title: 'Medals 1',
    img: medals1,
  },
  {
    title: 'Medals 2',
    img: medals2,
  },
]

const Container = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  maxWidth: 1440,
  overflowX: 'hidden',
  overflowY: 'scroll',
  paddingInline: 80,
  display: 'flex',
  justifyContent: 'center',
}))

const ContentContainer = styled(Box)(() => ({
  marginTop: 128,
  marginRight: 230,
  marginBottom: 80,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
}))

const Modal = ({ onClose }: { onClose: () => void }) => {
  const imagePopperState = useImagePopperState()

  return (
    <Dialog
      open={imagePopperState.open}
      onClose={onClose}
      sx={{
        padding: 10,
      }}
    >
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        <Image
          width={700}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: 50,
          }}
          src={imagePopperState.src}
          alt="Adults fighting Jiu-Jitsu"
        />
      </Box>
    </Dialog>
  )
}

export default function OurSchool() {
  const setImagePopperState = useSetImagePopperState()

  const handleMenuClose = () => {
    setImagePopperState({
      src: '',
      open: false,
    })
  }

  const handleMenuOpen = (src: string) => {
    setImagePopperState({
      src,
      open: true,
    })
  }

  return (
    <>
      <Container textAlign="center">
        <Modal onClose={handleMenuClose} /> :
        <GGrey />
        <ContentContainer>
          <Title>Our School</Title>
          <BodyText width={500} mt={1} textAlign="start">
            Our academy is a spacious 3,000 sqft with lockers, male and female change rooms, showers,
            GBWear and all the gear you need to learn BJJ. The mats are placed over hundreds of tires
            to prevent injuries, and wear and tear on your body.
          </BodyText>
        </ContentContainer>
        <ImageList sx={{ width: 800, height: 450, marginTop: 16 }} cols={5} rowHeight={200}>
          {itemData.map((item) => {
            return (
              (
                <Button key={item.title} onClick={() => handleMenuOpen(item.img.src)}>
                  <ImageListItem>
                  <Image
                    width={150}
                    height={250}
                    style={{
                      marginTop: 50,
                    }}
                    src={`${item.img.src}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  </ImageListItem>
                </Button>
              )
            )
          })}
        </ImageList>
      </Container>
    </>
  )
}
