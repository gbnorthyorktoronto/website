import { Box, Typography, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: 350,
  height: 300,
  left: 289,
  top: 135,

  textAlign: 'center',

  background: '#317DC3',
  border: '4px solid #FFFFFF',
  borderRadius: 20,
  boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.25)',
}))

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: 24,
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 400,
  fontSize: 18,
  width: 280,
}))

const Course = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body mt={3}>{children}</Body>
    </Container>
  )
}

export default Course
