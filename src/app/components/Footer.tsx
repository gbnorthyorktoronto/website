import { Box, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  height: 20,
  alignSelf: 'end',
  padding: 20,
  backgroundColor: theme.palette.common.white,
}))

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Container>
      COPYRIGHT © {year} Gracie Barra. All rights reserved.
      Built by <a href="https://debora.dev">Decoder</a>
    </Container>
  )
}

export default Footer
