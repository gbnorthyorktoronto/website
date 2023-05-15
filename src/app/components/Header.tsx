import { Box, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  height: 80,
  justifyContent: 'space-between',
  paddingLeft: 330,
  paddingRight: 80,
  width: '100%',
}))

const Header = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
)

export default Header
