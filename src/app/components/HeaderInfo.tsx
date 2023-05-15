import { Box, styled } from "@mui/material"
import { ReactNode } from "react"

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  backgroundColor: theme.palette.common.white,
  width: '100%',
  height: 60,
  paddingLeft: 350,
  paddingRight: 60,
  justifyContent: 'space-between',
}))

const HeaderInfo = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
)

export default HeaderInfo
