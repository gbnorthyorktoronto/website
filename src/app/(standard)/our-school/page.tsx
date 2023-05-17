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
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'center',
}))

const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
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

  const isMobile = () => {
    return !!(window.innerWidth <= 500)
  }

  return (
    <>
      <Container
        className="px-[5px] sm:px-[80px] flex-col sm:flex-row items-center sm:items-start"
        textAlign="center"
      >
        <Modal onClose={handleMenuClose} />
        <GGrey />
        <ContentContainer
          className="items-center	sm:items-start mt-[25px] sm:mt-[128px] sm:mr-[192px]"
        >
          <Title>Our School</Title>
          <BodyText
            className="w-11/12 sm:w-[500px] !mt-[25px] sm:!mt-[16px] text-[16px] sm:text-[18px] text-center sm:text-start"
          >
            Our academy is a spacious 3,000 sqft with lockers, male and female change rooms, showers,
            GBWear and all the gear you need to learn BJJ. The mats are placed over hundreds of tires
            to prevent injuries, and wear and tear on your body.
          </BodyText>
        </ContentContainer>
        <ImageList
          className="mt-[25px] sm:mt-[128px] w-11/12 sm:w-[700px] h-[450px]"
          cols={isMobile() ? 2 : 4}
          rowHeight={150}
          gap={2}
        >
          {itemData.map((item) => {
            return (
              (
                <Button
                  sx={{
                    width: 150,
                  }}
                  key={item.title}
                  onClick={() => handleMenuOpen(item.img.src)}
                >
                  <ImageListItem
                    sx={{
                      width: 150,
                    }}
                    key={item.title}
                  >
                    <Image
                      sizes="100vw"
                      fill={true}
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
