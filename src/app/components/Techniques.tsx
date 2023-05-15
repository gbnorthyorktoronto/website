import { Box, Typography, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: 428,
  height: 188,
  left: 158,
  top: 135,

  textAlign: 'center',

  background: '#317DC3',
  border: '4px solid #FFFFFF',
  borderRadius: 20,
  boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.25)',
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: 24,
  width: 380,
}))

const Techniques = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  )
}

export default Techniques
