import { Box, Typography, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  // boxSizing: 'border-box',

  // position: 'absolute',
  width: 221,
  height: 221,
  left: 852,
  top: 450,

  textAlign: 'center',

  background: '#317DC3',
  border: '4px solid #FFFFFF',
  borderRadius: '50%',
  boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.25)',
}))

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: 24,
  width: 180,
}))

const Skill = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default Skill
